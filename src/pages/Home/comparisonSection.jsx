import './comparisonSection.css';
import React from 'react';
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
        <Box className="comparison-section">
            <div className="comparison-header">
                <Typography variant="h2" className="section-title">
                    Transform Your Job Search
                </Typography>
                <Typography variant="body1" className="section-subtitle">
                    See how Pineapply revolutionizes your job hunting experience
                </Typography>
            </div>

            <Box className="comparison-container">
                {/* LEFT COLUMN (Before) */}
                <Box className="comparison-column before-column">
                    <div className="column-header">
                        <Typography variant="h3" className="comparison-heading">
                            Before Pineapply
                        </Typography>
                        <Typography variant="body1" className="comparison-subheading">
                            Struggling to navigate the job market without the right tools
                        </Typography>
                    </div>

                    <div className="cards-container">
                        <Box className="comparison-card">
                            <ErrorOutlineIcon className="card-icon" />
                            <div className="card-content">
                                <Typography variant="h5" className="card-title">
                                    Time Wasted
                                </Typography>
                                <Typography variant="body2" className="card-desc">
Countless hours spent finding relevant roles and manually applying them                                </Typography>
                            </div>
                        </Box>

                        <Box className="comparison-card">
                            <AccessTimeIcon className="card-icon" />
                            <div className="card-content">
                                <Typography variant="h5" className="card-title">
                                    Time Wasted
                                </Typography>
                                <Typography variant="body2" className="card-desc">
                                    Job searching is a time-consuming task
                                </Typography>
                            </div>
                        </Box>

                        <Box className="comparison-card">
                            <ViewListIcon className="card-icon" />
                            <div className="card-content">
                                <Typography variant="h5" className="card-title">
                                    Fragmentation
                                </Typography>
                                <Typography variant="body2" className="card-desc">
                                    Switching between Linkedin/Nukari Gulf/Indeed and other job boards is stressful
                                </Typography>
                            </div>
                        </Box>
                    </div>
                </Box>

                {/* ARROW IN THE MIDDLE */}
                <Box className="arrow-container">
                    <div className="arrow-box">
                        <ArrowForwardIosIcon />
                    </div>
                </Box>

                {/* RIGHT COLUMN (After) */}
                <Box className="comparison-column after-column">
                    <div className="column-header">
                        <Typography variant="h3" className="comparison-heading">
                            After Pineapply
                        </Typography>
                        <Typography variant="body1" className="comparison-subheading">
                            Easily navigate the job market with AI-powered tools
                        </Typography>
                    </div>

                    <div className="cards-container">
                        <Box className="comparison-card">
                            <CheckCircleOutlineIcon className="card-icon success" />
                            <div className="card-content">
                                <Typography variant="h5" className="card-title">
                                    No More Rejections
                                </Typography>
                                <Typography variant="body2" className="card-desc">
                                    Instantly create ATS-friendly resumes
                                </Typography>
                            </div>
                        </Box>

                        <Box className="comparison-card">
                            <AutoFixHighIcon className="card-icon success" />
                            <div className="card-content">
                                <Typography variant="h5" className="card-title">
                                    Save Time
                                </Typography>
                                <Typography variant="body2" className="card-desc">
                                    Pineapply's AI tools simplify your job search
                                </Typography>
                            </div>
                        </Box>

                        <Box className="comparison-card">
                            <DoneAllIcon className="card-icon success" />
                            <div className="card-content">
                                <Typography variant="h5" className="card-title">
                                    All in One Solution
                                </Typography>
                                <Typography variant="body2" className="card-desc">
                                    Manage your entire job search from a single dashboard
                                </Typography>
                            </div>
                        </Box>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default ComparisonSection;