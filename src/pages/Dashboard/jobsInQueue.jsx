import React, { useState } from 'react';
import { Box, Typography, Sheet, Divider, Tabs, TabList, Tab, TabPanel, Button, CircularProgress } from '@mui/joy';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import JobCard from './JobCard';

// --- Styles ---
const columnContentStyles = {
    overflowY: 'auto',
    overflowX: 'hidden',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
    p: 1,
    borderRadius: 'sm',
    minHeight: '150px',
};

// --- Component ---
const defaultOnJobClick = () => {};
const defaultOnLoadMore = async () => {}; // Async default for potential await

const JobsInQueue = ({
                         matchedJobs = [],
                         onJobClick = defaultOnJobClick,
                         // Props for pagination/loading
                         onLoadMore = defaultOnLoadMore,
                         hasMore = false,
                         isLoadingMore = false,
                     }) => {
    // --- Hooks ---
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // --- Data ---
    // Define columns (assuming other columns remain empty for now)
    const columns = [
        { title: 'Matched jobs', shortTitle: 'Matched', jobs: matchedJobs || [] },
        { title: 'Auto-applying', shortTitle: 'Auto-applying', jobs: [] },
        { title: 'Applied', shortTitle: 'Applied', jobs: [] },
    ];

    // --- Content Renderer ---
    // Pass isLoadingMore and hasMore specific to the Matched column
    const renderColumnContent = (jobs, columnTitle, isMatchedColumn) => (
        <Box
            sx={{
                ...columnContentStyles,
                maxHeight: isMobile ? 'calc(75vh - 150px)' : '70vh', // Adjusted height slightly
                position: 'relative', // For potential absolute positioning of loader
            }}
        >
            {/* Job Cards */}
            {jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobCard
                        key={job.id || `job-${columnTitle}-${job.title}-${job.company_name}`}
                        job={job}
                        onClick={() => onJobClick(job)}
                    />
                ))
            ) : (
                // Show only if not loading more initially
                !isLoadingMore && (
                    <Typography level="body-sm" sx={{ textAlign: 'center', color: 'text.disabled', mt: 3, fontStyle: 'italic' }}>
                        No jobs in this stage.
                    </Typography>
                )
            )}

            {/* Load More Button / Indicator for Matched Column */}
            {isMatchedColumn && hasMore && (
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={onLoadMore}
                    disabled={isLoadingMore}
                    loading={isLoadingMore}
                    fullWidth
                    sx={{ mt: 1.5, mx: 'auto', maxWidth: '200px' }} // Style button
                >
                    Load More
                </Button>
            )}
            {isMatchedColumn && isLoadingMore && ( // Show spinner when loading more
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <CircularProgress size="sm" />
                </Box>
            )}
        </Box>
    );

    // --- Render Logic ---

    // Mobile View: Tabs
    if (isMobile) {
        return (
            <Tabs
                aria-label="Job queue tabs"
                value={activeTabIndex}
                onChange={(event, newValue) => setActiveTabIndex(newValue)}
                sx={{ width: '100%', bgcolor: 'background.surface', borderRadius: 'md', boxShadow: 'sm' }}
            >
                <TabList sticky="top" variant="soft" sx={{ '--List-padding': '4px', '--List-gap': '4px', p: 0.5 }}>
                    {columns.map((column, index) => (
                        <Tab key={column.shortTitle} value={index} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                            {column.shortTitle} ({index === 0 ? column.jobs.length : 0}) {/* Show count only for matched */}
                        </Tab>
                    ))}
                </TabList>
                {columns.map((column, index) => (
                    <TabPanel key={column.title} value={index} sx={{ p: 1.5, backgroundColor: 'background.level1' }}>
                        {renderColumnContent(column.jobs, column.title, index === 0)} {/* Pass isMatchedColumn=true only for index 0 */}
                    </TabPanel>
                ))}
            </Tabs>
        );
    }

    // Desktop View: Grid
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2.5, alignItems: 'start', width: '100%' }}>
            {columns.map((column, index) => (
                <Sheet key={column.title} variant="outlined" sx={{ p: 1.5, borderRadius: 'md', display: 'flex', flexDirection: 'column', gap: 1.5, backgroundColor: 'background.level1', height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 0.5 }}>
                        <Typography level="title-md" sx={{ color: 'text.primary' }}>{column.title}</Typography>
                        <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>({index === 0 ? column.jobs.length : 0})</Typography> {/* Show count only for matched */}
                    </Box>
                    <Divider />
                    {renderColumnContent(column.jobs, column.title, index === 0)} {/* Pass isMatchedColumn=true only for index 0 */}
                </Sheet>
            ))}
        </Box>
    );
};

export default JobsInQueue;