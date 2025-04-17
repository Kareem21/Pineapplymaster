import { useState, useCallback, useRef } from 'react';
import supabase from '../../supabaseClient'; // Adjust path as needed

const JOBS_PER_PAGE = 21; // Number of jobs to fetch per request (divisible by 3 for grid)

function useJobSearch() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const [currentSearchTerms, setCurrentSearchTerms] = useState([]); // Store terms for loading more
    const currentOffset = useRef(0); // Use ref to keep track of offset across renders without causing re-render itself

    // --- The Core Search Logic ---
    const fetchJobsInternal = useCallback(async (searchTerms, offset, limit) => {
        console.log(`Workspaceing jobs. Terms: ${searchTerms}, Offset: ${offset}, Limit: ${limit}`);
        const combinedResults = [];
        const processedIds = new Set(); // Track processed jobs FOR THIS BATCH

        try {
            const terms = Array.isArray(searchTerms) ? searchTerms : [searchTerms];

            for (const term of terms) {
                const searchTerm = term.trim();
                if (!searchTerm) continue;

                // Combine queries for efficiency if possible, or run sequentially
                // For simplicity, keeping sequential searches per term, but applying pagination to each
                const queries = [
                    // LN High
                    supabase.from('scrapedjobsln').select('title, company_name, location, experience_level, description, listed_at', { count: 'exact' })
                        .or(`title.ilike.% ${searchTerm} %,title.ilike.% ${searchTerm}.,title.ilike.% ${searchTerm},title.ilike.${searchTerm} %`)
                        .range(offset, offset + limit - 1),
                    // LN Medium
                    supabase.from('scrapedjobsln').select('title, company_name, location, experience_level, description, listed_at', { count: 'exact' })
                        .ilike('title', `%${searchTerm}%`)
                        .range(offset, offset + limit - 1),
                    // LN Low (FTS doesn't easily support offset/limit in the same way without subqueries/CTEs, might need adjustment or fetch more initially)
                    // Let's fetch a larger batch for FTS and filter client-side for simplicity here, OR accept fewer results
                    supabase.from('scrapedjobsln').select('title, company_name, location, experience_level, description, listed_at', { count: 'exact' })
                        .textSearch('fts', `'${searchTerm}'`, { config: 'english', type: 'plain' })
                        .limit(limit * 2), // Fetch more FTS results to potentially fill the gap

                    // HS High
                    supabase.from('hscraper').select('id, apply_url, title, source, requirements_summary, job_description, company_name', { count: 'exact' })
                        .or(`title.ilike.% ${searchTerm} %,title.ilike.% ${searchTerm}.,title.ilike.% ${searchTerm},title.ilike.${searchTerm} %`)
                        .range(offset, offset + limit - 1),
                    // HS Medium
                    supabase.from('hscraper').select('id, apply_url, title, source, requirements_summary, job_description, company_name', { count: 'exact' })
                        .ilike('title', `%${searchTerm}%`)
                        .range(offset, offset + limit - 1),
                    // HS Low
                    supabase.from('hscraper').select('id, apply_url, title, source, requirements_summary, job_description, company_name', { count: 'exact' })
                        .ilike('job_description', `%${searchTerm}%`)
                        .range(offset, offset + limit - 1),
                ];

                // Execute queries (can be parallelized with Promise.all for performance)
                // Note: Error handling needs refinement for Promise.all
                const results = await Promise.all(queries);

                // Process results, assign priorities, create IDs, add to combinedResults
                results.forEach((response, index) => {
                    if (!response.error && response.data) {
                        const isLinkedIn = index < 3;
                        const priority = index % 3 === 0 ? 'high' : (index % 3 === 1 ? 'medium' : 'low');

                        response.data.forEach(job => {
                            let id;
                            let jobData;
                            if (isLinkedIn) {
                                id = `ln-${job.title}-${job.company_name}`;
                                jobData = { ...job, id, priority, source: 'LinkedIn' };
                            } else {
                                id = `hs-${job.id}`;
                                jobData = {
                                    id, title: job.title, company_name: job.company_name,
                                    location: 'Not specified',
                                    experience_level: job.requirements_summary || 'Not specified',
                                    description: job.job_description,
                                    listed_at: new Date().toISOString(), // Consider using created_at if available/indexed
                                    priority, source: job.source || 'Web', apply_url: job.apply_url
                                };
                            }

                            // Add if not already processed IN THIS BATCH
                            if (!processedIds.has(id)) {
                                processedIds.add(id);
                                combinedResults.push(jobData);
                            }
                        });
                    } else if (response.error) {
                        console.error(`Search error in query index ${index}:`, response.error.message);
                        // Potentially collect errors to show user
                    }
                });

                // Basic check if there might be more data based on count (Supabase count is experimental)
                // A simpler check: if we received exactly `limit` items, assume there *might* be more.
                // A more robust check would involve total counts or specific API design.
                // For now, if ANY query returned close to the limit, assume more *could* exist.
                // This is imperfect, especially with multiple queries.
                let potentiallyMore = results.some(r => !r.error && r.data && r.data.length >= limit);
                // Refined check for FTS which fetches more
                if (!results[2].error && results[2].data && results[2].data.length >= limit * 2) potentiallyMore = true;


                // NOTE: This deduplication and priority sorting should ideally happen AFTER combining
                // results from ALL terms if multiple search terms are used.
                // For simplicity with pagination, we process per term here, which isn't perfect
                // for cross-term priority ranking.

            } // End loop through terms

            // Sort THIS BATCH by priority and date
            const priorityOrder = { high: 0, medium: 1, low: 2 };
            combinedResults.sort((a, b) => {
                const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
                if (priorityDiff !== 0) return priorityDiff;
                const dateA = a.listed_at ? new Date(a.listed_at) : new Date(0);
                const dateB = b.listed_at ? new Date(b.listed_at) : new Date(0);
                return dateB - dateA;
            });

            // Basic "has more" check - if we fetched close to the limit, assume more might exist.
            // A more reliable method requires total counts from the backend.
            const mightHaveMore = combinedResults.length >= limit;

            return { batchJobs: combinedResults, mightHaveMore };

        } catch (err) {
            console.error('Unexpected error during internal job fetch:', err);
            // Throw error to be caught by the calling function
            throw new Error('Failed to fetch job data.');
        }
    }, []); // Dependencies: supabase client implicitly available

    // --- Function to Trigger Initial Search ---
    const search = useCallback(async (searchTerms) => {
        if (!searchTerms || (Array.isArray(searchTerms) && searchTerms.length === 0)) {
            setJobs([]);
            setHasMore(false);
            setError(null);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setError(null);
        currentOffset.current = 0; // Reset offset for new search
        setCurrentSearchTerms(searchTerms); // Store terms for load more

        try {
            const { batchJobs, mightHaveMore } = await fetchJobsInternal(searchTerms, 0, JOBS_PER_PAGE);
            setJobs(batchJobs);
            setHasMore(mightHaveMore); // Update based on fetch results
        } catch (err) {
            setError(err.message);
            setJobs([]); // Clear jobs on error
            setHasMore(false);
        } finally {
            setIsLoading(false);
        }
    }, [fetchJobsInternal]); // Dependency

    // --- Function to Load More Results ---
    const loadMore = useCallback(async () => {
        if (!hasMore || isLoadingMore || isLoading) {
            console.log("Load more conditions not met.");
            return;
        } // Don't load if no more, or already loading

        setIsLoadingMore(true);
        setError(null); // Clear previous errors
        currentOffset.current += JOBS_PER_PAGE; // Increment offset

        console.log("Loading more jobs...");

        try {
            const { batchJobs, mightHaveMore } = await fetchJobsInternal(currentSearchTerms, currentOffset.current, JOBS_PER_PAGE);

            // Deduplicate against existing jobs before appending
            const existingIds = new Set(jobs.map(job => job.id));
            const newUniqueJobs = batchJobs.filter(job => !existingIds.has(job.id));

            setJobs(prevJobs => [...prevJobs, ...newUniqueJobs]);
            setHasMore(mightHaveMore && newUniqueJobs.length > 0); // Stop if no new unique jobs were added or API indicates no more
        } catch (err) {
            setError(err.message);
            // Optionally revert offset or handle error state more gracefully
            currentOffset.current -= JOBS_PER_PAGE; // Revert offset on error
            setHasMore(false); // Assume no more if error occurs during load more
        } finally {
            setIsLoadingMore(false);
        }
    }, [fetchJobsInternal, currentSearchTerms, hasMore, isLoadingMore, isLoading, jobs]); // Dependencies

    return {
        jobs,
        isLoading,
        isLoadingMore, // For the "Load More" button state
        error,
        hasMore, // Flag to indicate if more jobs might be available
        search, // Function to trigger initial search
        loadMore, // Function to trigger loading next page
    };
}

export default useJobSearch;