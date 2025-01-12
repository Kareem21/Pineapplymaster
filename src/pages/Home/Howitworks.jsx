
// HowItWorks.jsx
import React from 'react';
import { Typography, Box } from '@mui/joy';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Upload your CV',
            description: 'Upload your CV so Pineapply can match your skills to available jobs.',
            icon: '📄'
        },
        {
            title: 'Pineapply finds jobs',
            description: 'We scan all online job sources to find opportunities relevant for you.',
            icon: '🔍'
        },
        {
            title: 'Automatic Applications',
            description: 'We apply on your behalf for the roles you select—just sit back and relax!',
            icon: '✨'
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                background: 'linear-gradient(145deg, #3E175F, #492D6F)',
                padding: { xs: '3rem 1rem', md: '6rem 2rem' },
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        marginBottom: '4rem',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    How It Works
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: { xs: '2rem', md: '3rem' },
                        position: 'relative',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    {steps.map((step, index) => (
                        <Box
                            key={index}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                padding: '2.5rem',
                                color: 'white',
                                textAlign: 'center',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                {step.icon}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                                    fontWeight: 'bold',
                                    marginBottom: '1rem',
                                }}
                            >
                                {step.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    opacity: 0.9,
                                    lineHeight: 1.6,
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default HowItWorks;