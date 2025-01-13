import React from 'react';
import './ComparisonSection.css';
import { Box, Typography } from '@mui/joy';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ViewListIcon from '@mui/icons-material/ViewList';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ComparisonSection = () => {
    return (
        <Box className="comparison-container">
            <Box className="comparison-inner">
                {/* LEFT COLUMN (Before) */}
                <Box className="comparison-column before-column">
                    <Typography variant="h3" className="comparison-heading">
                        BEFORE PINEAPPLY
                    </Typography>
                    <Typography variant="body1" className="comparison-subheading">
                        Struggling to navigate the job market without the right tools
                    </Typography>

                    <Box className="comparison-card">
                        <Typography variant="h5" className="card-title">
                            <ErrorOutlineIcon className="card-icon" />
                            Rejection
                        </Typography>
                        <Typography variant="body2" className="card-desc">
                            Non-compliant resumes lead to rejections
                        </Typography>
                    </Box>

                    <Box className="comparison-card">
                        <Typography variant="h5" className="card-title">
                            <AccessTimeIcon className="card-icon" />
                            Time Wasted
                        </Typography>
                        <Typography variant="body2" className="card-desc">
                            Job searching is a time-consuming task
                        </Typography>
                    </Box>

                    <Box className="comparison-card">
                        <Typography variant="h5" className="card-title">
                            <ViewListIcon className="card-icon" />
                            Fragmentation
                        </Typography>
                        <Typography variant="body2" className="card-desc">
                            Switching between Linkedin/Nukari Gulf/Indeed and other job boards is stressful
                        </Typography>
                    </Box>
                </Box>

                {/* ARROW IN THE MIDDLE */}
                <Box className="arrow-box">
                    <ArrowForwardIosIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Box>

                {/* RIGHT COLUMN (After) */}
                <Box className="comparison-column after-column">
                    <Typography variant="h3" className="comparison-heading">
                        AFTER PINEAPPLY
                    </Typography>
                    <Typography variant="body1" className="comparison-subheading">
                        Easily navigate the job market with AI-powered tools
                    </Typography>

                    <Box className="comparison-card">
                        <Typography variant="h5" className="card-title">
                            <CheckCircleOutlineIcon className="card-icon" />
                            No More Rejections
                        </Typography>
                        <Typography variant="body2" className="card-desc">
                            Instantly create ATS-friendly resumes
                        </Typography>
                    </Box>

                    <Box className="comparison-card">
                        <Typography variant="h5" className="card-title">
                            <AutoFixHighIcon className="card-icon" />
                            Save Time
                        </Typography>
                        <Typography variant="body2" className="card-desc">
                            Pineapply’s AI tools simplify your job search
                        </Typography>
                    </Box>

                    <Box className="comparison-card">
                        <Typography variant="h5" className="card-title">
                            <DoneAllIcon className="card-icon" />
                            All in One Solution
                        </Typography>
                        <Typography variant="body2" className="card-desc">
                            Manage your entire job search from a single dashboard
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ComparisonSection;
