// home.jsx
import React from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';
import './Home.css';

/** Custom Components */
import Features from './Features';
import HowItWorks from './HowItWorks';
import PricingComponent from './PricingComponent';
import CompaniesCarousel from './CompaniesCarousel';
import ComparisonSection from './ComparisonSection';

const Home = () => {
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            {/* ========== HERO SECTION ========== */}
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
                        {/* Hero Heading */}
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

                        {/* Subline with Typewriter */}
                        <Box sx={{ minHeight: '3rem', marginTop: '1rem' }}>
                            <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#492d6f' }}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Streamline your Dubai Job search',
                                            'Automatically fill out job form applications',
                                            'Increase your chances of landing a job by 6x',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                    }}
                                />
                            </Typography>
                        </Box>

                        {/* Beta text */}
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
                                    backgroundColor: '#f1f963',
                                    color: '#492d6f',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#ffd700',
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

            {/* ========== FEATURES ========== */}
            <Box
                sx={{
                    width: '100%',
                    margin: '0 auto',
                    padding: { xs: '2rem', md: '4rem' },
                    backgroundColor: '#f1f963',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Features />
            </Box>

            {/* ========== BANNER IMAGE ========== */}
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

            {/* ========== HOW IT WORKS ========== */}
            <HowItWorks />

            {/* ========== PRICING ========== */}
            <PricingComponent />

            {/* ========== LOGO CAROUSEL ========== */}
            <CompaniesCarousel />

            {/* ========== COMPARISON SECTION ========== */}
            <ComparisonSection />
        </Box>
    );
};

export default Home;