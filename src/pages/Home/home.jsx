// Home.jsx
import './home.css';
import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';

/** Custom Components */
import Features from './Features';
import HowItWorks from './howItWorks.jsx';
import PricingComponent from './pricingComponent.jsx';
import CompaniesCarousel from './companiesCarousel.jsx';
import ComparisonSection from './comparisonSection.jsx';

const AnimatedNumber = ({ endValue }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateValue(0, endValue, 2000);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [endValue]);

    const animateValue = (start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

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
                            className="jobs-counter"
                            sx={{
                                marginTop: '2rem',
                                fontSize: '2rem',
                                fontWeight: 600,
                                color: '#492d6f',
                            }}
                        >
                            Over <AnimatedNumber endValue={18425} /> jobs scraped weekly
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
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    backgroundColor: '#fafafa',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: '#492d6f',
                        marginBottom: '2rem',
                    }}
                >
                    Focus on what matters most
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
                    }}
                >
                    Let us handle the tedious applications while you concentrate on networking, interview prep, and advancing your skills.
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 600,
                        color: '#492d6f',
                        maxWidth: '1000px',
                        margin: '3rem auto 0',
                        lineHeight: '1.4',
                    }}
                >
                    Pineapply has the UAE's largest job database, with over <AnimatedNumber endValue={18425} /> jobs scraped weekly. All in one place for your convenience
                </Typography>
            </Box>

            <HowItWorks />

            <PricingComponent />

            <ComparisonSection />
        </Box>
    );
};

export default Home;