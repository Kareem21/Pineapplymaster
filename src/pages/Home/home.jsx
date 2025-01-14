import './home.css'; // At the top

import React from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';

/** Custom Components */
import Features from './Features';
import HowItWorks from './howItWorks.jsx';
import PricingComponent from './pricingComponent.jsx';
import CompaniesCarousel from './companiesCarousel.jsx';
import ComparisonSection from './comparisonSection.jsx';

const Home = () => {
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            {/* Hero Section */}
            <div className="home-hero-container">
                <div className="home-hero-overlay">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '2rem',
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                marginBottom: 0,
                                fontWeight: 700,
                                color: '#492d6f',
                            }}
                        >
                            Your personal A.I recruiter
                        </Typography>

                        <Box sx={{ minHeight: '3rem', marginTop: '1rem' }}>
                            <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#492d6f' }}>
                                Automate your entire Dubai job search. Apply to every single
                                relevant job for you.<br /> Find a job in the UAE 8x faster.
                            </Typography>
                        </Box>

                        <Typography
                            variant="h3"
                            sx={{
                                marginTop: '2rem',
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: '#492d6f',
                            }}
                        >
                            Auto-applier currently in Beta
                        </Typography>

                        <Box sx={{ marginTop: '2rem' }}>
                            <Button
                                variant="solid"
                                className="home-cta-button"
                                sx={{
                                    fontSize: '1.2rem',
                                    padding: '1rem 2rem',
                                    backgroundColor: '#f8dc14',
                                    color: '#492d6f',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#f8dc14',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                Try Pineapply here
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>

            <CompaniesCarousel />

            {/* Features Section */}
            <div className="features-overlay">
                <Features />
            </div>

            <Box
                sx={{
                    padding: '2rem 1rem',
                    textAlign: 'center',
                    backgroundColor: '#fafafa',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#492d6f',
                        marginBottom: '1rem',
                    }}
                >
                    Focus on what matters most
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.1rem',
                        color: '#555',
                        lineHeight: '1.8',
                    }}
                >
                    Let us handle the tedious applications while you concentrate on networking, interview prep, and advancing your skills.
                </Typography>
            </Box>

            <HowItWorks />

            <PricingComponent />

            <ComparisonSection />
        </Box>
    );
};

export default Home;