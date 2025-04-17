import React from 'react';
import { Box, Typography, IconButton, Sheet, Divider, Button, Link } from '@mui/joy';
import { useTheme } from '@mui/material/styles'; // Or @mui/system
import useMediaQuery from '@mui/material/useMediaQuery'; // Or @mui/system

// Keep constants related to panel itself here
const PANEL_WIDTH_DESKTOP = '400px';
const PANEL_HEIGHT_MOBILE = '85vh';
const MOBILE_BREAKPOINT = 'sm';

// Helper function (can be moved to utils if used elsewhere)
const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid Date';
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (e) { return 'Unknown Date'; }
};

const JobDetailPanel = ({ job, isOpen, onClose = () => {} }) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up(MOBILE_BREAKPOINT));

    // Defensive rendering: Don't render if closed or no job data
    if (!isOpen || !job) {
        return null;
    }

    return (
        <Sheet
            variant="outlined"
            sx={{
                position: 'fixed',
                p: 3,
                boxShadow: 'lg',
                zIndex: 1100,
                transition: 'transform 0.3s ease-in-out, right 0.3s ease-in-out, bottom 0.3s ease-in-out', // Include right/bottom for initial positioning
                overflowY: 'auto',
                bgcolor: 'background.surface',

                // Responsive positioning and transform
                ...(isDesktop && {
                    top: 0,
                    right: 0, // Start position controlled by transform
                    width: PANEL_WIDTH_DESKTOP,
                    height: '100vh',
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                    transform: isOpen ? 'translateX(0)' : `translateX(${PANEL_WIDTH_DESKTOP})`,
                }),
                ...(!isDesktop && {
                    bottom: 0, // Start position controlled by transform
                    left: 0,
                    width: '100%',
                    height: PANEL_HEIGHT_MOBILE,
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    transform: isOpen ? 'translateY(0)' : `translateY(${PANEL_HEIGHT_MOBILE})`,
                }),
            }}
            role="dialog"
            aria-labelledby="job-detail-title"
            aria-modal="true"
        >
            {/* Optional: Drag handle for mobile */}
            {!isDesktop && (
                <Box sx={{ width: '40px', height: '5px', bgcolor: 'neutral.300', borderRadius: '3px', margin: '-8px auto 8px auto', cursor: 'grab' }} />
            )}

            {/* Panel Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography level="h4" component="h2" id="job-detail-title">Job Info</Typography>
                <IconButton onClick={onClose} variant="plain" size="sm" aria-label="Close job details">
                    <span aria-hidden>✕</span>
                </IconButton>
            </Box>
            <Divider sx={{ mb: 2 }} />

            {/* Panel Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 100px)' }}> {/* Adjust height calc if needed */}

                {/* Scrollable details area */}
                <Box sx={{ flexGrow: 1, overflowY: 'auto', pr: 1, mr: -1 }}> {/* Inner scroll */}
                    <Box sx={{ mb: 3 }}>
                        <Typography level="h3" component="h3" sx={{ mb: 1, wordBreak: 'break-word' }}>
                            {job.title || 'No Title Available'}
                        </Typography>
                        <Typography level="title-lg" sx={{ color: 'primary.600', mb: 1 }}>
                            @ {job.company_name || 'Unknown Company'}
                        </Typography>
                        {job.location && job.location !== 'Not specified' && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <span role="img" aria-label="location" style={{ marginRight: '4px' }}>📍</span>
                                <Typography level="body-sm">{job.location}</Typography>
                            </Box>
                        )}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                            <Typography component="span" className="job-detail-tag"> {job.source || 'Web'} </Typography>
                            <Typography component="span" className="job-detail-tag"> Full Time </Typography> {/* Assuming; make dynamic if possible */}
                            {job.priority && (
                                <Typography component="span" className="job-detail-tag" sx={{ textTransform: 'capitalize', bgcolor: job.priority === 'high' ? 'warning.100' : job.priority === 'medium' ? 'success.100' : 'neutral.100' }}>
                                    {job.priority} Priority
                                </Typography>
                            )}
                        </Box>
                        <Typography level="body-xs" sx={{ color: 'neutral.600', mb: 2 }}>
                            Posted: {formatDate(job.listed_at)}
                        </Typography>
                    </Box>

                    {/* Description */}
                    {job.description && (
                        <Box mb={3}>
                            <Typography level="title-md" component="h4" sx={{ mb: 1 }}>Description:</Typography>
                            <Typography level="body-md" sx={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}>
                                {job.description}
                            </Typography>
                        </Box>
                    )}

                    {/* Requirements */}
                    {job.experience_level && job.experience_level !== 'Not specified' && (
                        <Box mb={3}>
                            <Typography level="title-md" component="h4" sx={{ mb: 1 }}>Requirements / Experience:</Typography>
                            <Typography level="body-md" sx={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}>
                                {job.experience_level}
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Sticky Actions Footer */}
                <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'background.surface' }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Button
                            fullWidth
                            color="primary"
                            variant="solid"
                            component="a" // Use Link component from Joy or plain 'a'
                            href={job.apply_url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            disabled={!job.apply_url}
                            aria-disabled={!job.apply_url}
                        >
                            Apply Now
                        </Button>
                        <Button fullWidth color="neutral" variant="outlined">
                            Save
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="plain" color="danger" size="sm">
                            Report & Hide
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ pb: 2 }} /> {/* Ensure padding at very bottom if needed */}
        </Sheet>
    );
};

// Apply memoization if panel content is complex and parent re-renders often
export default React.memo(JobDetailPanel);