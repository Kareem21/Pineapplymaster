import React from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';
import './Home.css';

import React from 'react';
import { Typography, Box, Button } from '@mui/joy';
import Typewriter from 'typewriter-effect';
import './Home.css';
import CardComponent from './CardComponent';
import Features from './Features';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="content-overlay">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '2rem',
                    }}>
                        <Typography variant="h3" color='appTheme' component="h1" gutterBottom sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, marginBottom: '0rem', width: '100%', padding: '1rem', boxSizing: 'border-box' }}>
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
                                        delay: 40
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
                            Auto-applier currently in Beta, accepting users soon.
                        </Typography>
                        <Box sx={{ marginTop: '2rem' }}>
                            <Button
                                color='appTheme'
                                variant='solid'
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

            <Box sx={{ padding: { xs: '2rem', md: '4rem' } }}>
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    align="center"
                    sx={{
                        fontSize: {xs: '2.5rem', sm: '3rem', md: '4rem'},
                        padding: '1rem',
                        width: '100%',
                        marginBottom: '2rem',
                    }}
                    color="appTheme"
                >
                    <b>How it works</b>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        gap: { xs: 4, sm: 6 },
                    }}
                >
                    {['Upload your CV', 'Automatically find and apply to relevant jobs', 'Sit back and relax'].map((title, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: '1',
                                padding: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: 'purple',
                                borderRadius: '8px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardComponent
                                sx={{
                                    height: '100%',
                                }}
                                title={title}
                                description={[
                                    "Upload your CV and let Pineapply handle the rest.",
                                    "Pineapply will scan all local job sites and automatically apply to relevant jobs.",
                                    "Pineapply will keep applying to roles until you get a job! View the dashboard for updates."
                                ][index]}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: '#f1f963',
                padding: { xs: '2rem', md: '4rem' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#F5DC34',
                    zIndex: 1,
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}>
                    <Features />
                </Box>
            </Box>

            <Box
                component="img"
                src="https://i.ibb.co/Gkb8WFT/robot-yellow.png"
                alt="Banner"
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </>
    );
};

export default Home;
