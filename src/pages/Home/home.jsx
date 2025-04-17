import './home.css';
import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import Features from './Features';
import HowItWorks from './howItWorks.jsx';
import PricingComponent from './pricingComponent.jsx';
import CompaniesCarousel from './companiesCarousel.jsx';
import ComparisonSection from './comparisonSection.jsx';

const AnimatedNumber = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const duration = 2000;
        const animateValue = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * endValue));
            if (progress < 1) {
                requestAnimationFrame(animateValue);
            }
        };
        requestAnimationFrame(animateValue);
    }, [endValue]);

    return (
        <span className="animated-number">
            {count.toLocaleString()}
        </span>
    );
};

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/dashboard');
    };

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <div className="home-hero-container">
                <div className="home-hero-overlay">
                    <Box className="hero-content">
                        <Typography
                            variant="h3"
                            component="h3"  // This will make it render an actual h3 tag
                            sx={{
                                fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
                                lineHeight: { xs: '1.3', md: '1.2' },
                                marginTop: { xs: '1rem', md: '0' },
                                color: '#492d6f',
                                fontFamily: 'var(--font-primary)'
                            }}
                        >
                            Your Personal A.I Recruiter
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.5rem',
                                marginTop: '1rem',
                                color: '#492d6f',
                                fontFamily: 'var(--font-primary)',
                                fontWeight: 600  // Semi Bold
                            }}
                        >
                            Automate your Dubai job search and apply to every single relevant job.
                            <br />
                            Find a job in the UAE 8x faster.
                        </Typography>

                        <div className="stats-container">
                            <Typography
                                component="div"
                                className="jobs-stat"
                                sx={{ fontFamily: 'var(--font-primary)' }}
                            >
                                Over <AnimatedNumber endValue={18425} /> jobs scraped weekly
                            </Typography>
                        </div>

                        <Button
                            variant="solid"
                            className="home-cta-button"
                            onClick={handleButtonClick}
                            sx={{
                                fontSize: '1rem',
                                padding: '0.875rem 2rem',
                                backgroundColor: '#f8dc14',
                                color: '#492d6f',
                                borderRadius: '100px',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                textTransform: 'none',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                fontFamily: 'var(--font-primary)',
                                '&:hover': {
                                    backgroundColor: '#f8dc14',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                },
                                '&:active': {
                                    transform: 'translateY(0)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                }
                            }}
                        >
                            Try Pineapply here - It's Free
                        </Button>

                        <CompaniesCarousel />
                    </Box>
                </div>
            </div>

            <div className="features-wrapper">
                <div className="features-overlay">
                    <Features />
                </div>
            </div>

            <Box sx={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: '#492d6f',
                        marginBottom: '2rem',
                        fontFamily: 'var(--font-primary)'
                    }}
                >
                    Focus on What Matters Most
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.4rem',
                        color: '#555',
                        lineHeight: '1.8',
                        marginBottom: '3rem',
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 400
                    }}
                >
                    Let us handle the tedious applications while you concentrate on networking,
                    interview prep, and advancing your skills.
                </Typography>
            </Box>

            <HowItWorks />
            {/*<PricingComponent />*/}
            {/*<ComparisonSection />*/}
        </Box>
    );
};

export default Home;