import React from 'react'; // No need for useState, useEffect here anymore unless for other purposes
import { Box, Typography, CircularProgress } from '@mui/joy'; // Removed unused imports
// Keep card imports
import CreditsCard from './creditsCard';
import PreferredTitlesCard from './preferredTitlesCard';
import ResumeCard from './resumeCard';
// Import the new components/hooks
import JobsInQueue from './jobsInQueue';
import JobDetailPanel from './JobDetailPanel'; // Import the extracted panel
import useJobSearch from '../../hooks/useJobSearch'; // Adjust path
import useJobDetailPanelState from '../../hooks/useJobDetailPanelState'; // Adjust path
import useBodyScrollLock from '../../hooks/useBodyScrollLock'; // Adjust path

// Define constants outside component
const DASHBOARD_PADDING = 2;

const Dashboard = () => {
    // --- Use Custom Hooks for State and Logic ---
    const {
        jobs,
        isLoading: isLoadingJobs, // Renamed to avoid conflict if other loading states exist
        isLoadingMore,
        error: searchError,
        hasMore,
        search, // Function to trigger search
        loadMore, // Function to load more jobs
    } = useJobSearch();

    const {
        selectedJob,
        isDetailOpen,
        openJobDetail,
        closeJobDetail,
    } = useJobDetailPanelState();

    // Apply body scroll lock when detail panel is open
    useBodyScrollLock(isDetailOpen);

    // Determine if a search has been attempted (based on hook state)
    // We know a search was attempted if it's loading, or finished loading (jobs array exists), or has an error.
    // Note: useJobSearch should ideally return a 'status' ('idle', 'loading', 'success', 'error') for cleaner state checking.
    // For now, we derive it. We need a state to track if initial load is done or if search was triggered.
    // Let's refine useJobSearch slightly to return initial search state or add a simple flag here.
    // Simplest approach for now: assume search attempted if isLoading, jobs.length>0 or searchError exists
    const hasSearched = isLoadingJobs || jobs.length > 0 || !!searchError;

    return (
        <Box sx={{
            p: DASHBOARD_PADDING,
            backgroundColor: 'background.surface',
            position: 'relative',
            height: '100%',
            overflowY: 'auto', // Allow dashboard scroll if content overflows viewport
            display: 'flex',
            flexDirection: 'column',
            // No padding change needed here now, panel handles its own space
        }}>
            <Typography level="h4" sx={{ mb: 2, flexShrink: 0 }}> {/* Prevent shrinking */}
                Dashboard
            </Typography>

            {/* --- Top Cards Grid --- */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                gap: 2,
                mb: 3,
                flexShrink: 0, // Prevent shrinking
            }}>
                <ResumeCard />
                {/* Pass the search function from the hook */}
                <PreferredTitlesCard onSearch={search} />
                <CreditsCard />
            </Box>

            {/* --- Job Application Queue Section --- */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}> {/* Takes remaining space */}
                {/* Show only after initial load state known or search attempted */}
                {hasSearched && (
                    <Typography level="h5" sx={{ mt: 2, mb: 2, flexShrink: 0 }}>
                        Job application queue
                    </Typography>
                )}

                {/* Display Loading State */}
                {isLoadingJobs && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, p: 3 }}>
                        <CircularProgress />
                    </Box>
                )}

                {/* Display Error State */}
                {!isLoadingJobs && searchError && (
                    <Box sx={{ textAlign: 'center', mt: 2, mb: 4, p: 2, bgcolor: 'danger.softBg', borderRadius: 'sm' }}>
                        <Typography color="danger">
                            Error: {searchError || 'Could not load jobs.'}
                        </Typography>
                        {/* Optionally add a retry button */}
                    </Box>
                )}

                {/* Display Job Queue (only if not loading initial jobs and no error) */}
                {!isLoadingJobs && !searchError && hasSearched && (
                    <>
                        {jobs.length > 0 ? (
                            <JobsInQueue
                                matchedJobs={jobs}
                                onJobClick={openJobDetail} // Pass panel opening function
                                // Pass pagination props
                                onLoadMore={loadMore}
                                hasMore={hasMore}
                                isLoadingMore={isLoadingMore}
                            />
                        ) : (
                            // Only show 'no jobs found' if search finished and returned empty
                            <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
                                <Typography>
                                    No jobs found matching your search criteria.
                                </Typography>
                            </Box>
                        )}
                    </>
                )}
            </Box>


            {/* --- Render Extracted Job Detail Panel --- */}
            <JobDetailPanel
                job={selectedJob}
                isOpen={isDetailOpen}
                onClose={closeJobDetail}
            />
        </Box>
    );
};

export default Dashboard;