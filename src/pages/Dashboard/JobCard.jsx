import React from 'react';
import { Card, Typography, Box } from '@mui/joy';

// Helper function (can be moved to utils)
const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid Date';
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (error) { return 'Unknown'; }
};

// Consider moving truncate to utils as well
const truncateDescription = (text, maxLength = 100) => {
    if (!text || typeof text !== 'string') return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const JobCard = ({ job, onClick }) => {
    // Guard against null/undefined job object
    if (!job) {
        console.warn("JobCard received null job prop.");
        return null; // Don't render anything if job is missing
    }

    const handleCardClick = () => {
        if (onClick && typeof onClick === 'function') {
            onClick(job);
        }
    };

    return (
        <Card
            variant="outlined"
            onClick={handleCardClick}
            // Add role and aria attributes for better accessibility
            role="button"
            tabIndex={0} // Make it focusable
            aria-label={`View details for ${job.title || 'job'} at ${job.company_name || 'company'}`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(); }} // Allow activation with Enter/Space
            sx={{
                p: 2,
                height: '100%', // Ensure cards try to fill height in grid/flex layouts
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeftWidth: 4,
                // Use default color if priority is missing
                borderLeftColor:
                    job.priority === 'high' ? 'warning.500' : // Changed high to warning
                        job.priority === 'medium' ? 'primary.500' : // Changed medium to primary
                            'neutral.300', // Low or undefined
                transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                '&:hover, &:focus-visible': { // Add focus-visible style
                    boxShadow: 'md',
                    borderColor: 'primary.500',
                    cursor: 'pointer',
                    outline: 'none', // Remove default focus outline if using custom styles
                },
                '&:focus-visible': { // Explicit focus style
                    boxShadow: 'md',
                    borderColor: 'primary.500',
                    outline: '2px solid', // Example focus ring
                    outlineColor: 'primary.200',
                    outlineOffset: '2px',
                }
            }}
        >
            {/* Top Section */}
            <Box>
                <Typography level="title-md" sx={{ mb: 0.5, fontWeight: 'bold', wordBreak: 'break-word' }}>
                    {job.title || 'Untitled Job'} {/* Default value */}
                </Typography>
                <Typography level="body-sm" sx={{ color: 'primary.600', mb: 1 }}>
                    {job.company_name || 'Unknown Company'} {/* Default value */}
                </Typography>
                {job.location && job.location !== 'Not specified' && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                        <span role="img" aria-label="location" style={{marginRight: '4px'}}>📍</span>
                        <Typography level="body-sm">
                            {job.location}
                        </Typography>
                    </Box>
                )}
                {/* Description/Experience removed for brevity as per user's original JobCard */}
            </Box>

            {/* Bottom Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                    {formatDate(job.listed_at)}
                </Typography>
                <Typography
                    level="body-xs"
                    sx={{ px: 1, py: 0.25, borderRadius: 'sm', bgcolor: 'neutral.100', color: 'neutral.700' }}
                >
                    {job.source || 'Web'} {/* Default value */}
                </Typography>
            </Box>
        </Card>
    );
};

// Memoize JobCard as it's rendered in lists and might receive stable props
export default React.memo(JobCard);