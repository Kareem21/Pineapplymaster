// home.jsx
import React from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';
import './home.css';

/** Custom Components */
import Features from './Features';
import HowItWorks from './howItWorks';
import PricingComponent from './pricingComponent';
import CompaniesCarousel from './companiesCarousel';
import ComparisonSection from './comparisonSection';
//commit

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

            <Box
                sx={{
                    width: '100%',
                    margin: '0 auto',
                    padding: { xs: '2rem', md: '4rem' },
                    backgroundColor: '#f8dc14',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Features />
            </Box>

            <Box
                component="img"
                src="https://i.ibb.co/Gkb8WFT/robot-yellow.png"
                alt="Banner"
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                }}
            />

            <HowItWorks />

            <PricingComponent />

            <ComparisonSection />
        </Box>
    );
};

export default Home;