import React from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';
import './Home.css';

// Import your custom components:
import Features from './Features.jsx';
import HowItWorks from './Howitworks.jsx';
import PricingComponent from './PricingComponent.jsx';
import CompaniesCarousel from './CompaniesCarousel.jsx';
import CardComponent from './CardComponent'; // if needed in this file

const Home = () => {
    return (
        <>
            {/* ========== HERO SECTION ========== */}
            <div className="home-container">
                <div className="content-overlay">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '2rem',
                        }}
                    >
                        <Typography
                            variant="h3"
                            color="appTheme"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                                marginBottom: '0rem',
                                width: '100%',
                                padding: '1rem',
                                boxSizing: 'border-box',
                            }}
                        >
                            Your personal A.I recruiter
                        </Typography>

                        <Box sx={{ minHeight: '4rem' }}>
                            <Typography variant="h2" component="h2" gutterBottom>
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

                        <Typography
                            variant="h3"
                            component="h3"
                            sx={{
                                marginTop: '3rem',
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'A',
                            }}
                        >
                            Auto-applier currently in Beta
                        </Typography>

                        <Box sx={{ marginTop: '2rem' }}>
                            <Button
                                color="appTheme"
                                variant="solid"
                                className="cta-button"
                                sx={{
                                    fontSize: '1.2rem',
                                    padding: '1rem 2rem',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                Try Pineapply here
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>

            {/* ========== FULL-WIDTH FEATURES SECTION ========== */}
            <Box
                sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    margin: '0 auto',
                    padding: { xs: '2rem', md: '4rem' },
                    backgroundColor: '#f1f963',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Features />
            </Box>

            {/* ========== BANNER (FULL-WIDTH IMAGE) ========== */}
            <Box
                component="img"
                src="https://i.ibb.co/Gkb8WFT/robot-yellow.png"
                alt="Banner"
                sx={{
                    width: '100vw',
                    height: 'auto',
                    display: 'block',
                }}
            />

            {/* ========== HOW IT WORKS ========== */}
            <HowItWorks />

            {/* ========== PRICING SECTION ========== */}
            <PricingComponent />

            {/* ========== LOGO CAROUSEL ========== */}
            <CompaniesCarousel />
        </>
    );
};

export default Home;
