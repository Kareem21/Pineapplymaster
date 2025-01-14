import React from 'react';
import { Box, Typography } from '@mui/joy';

const Features = () => {
    const features = [
        {
            title: 'One click to automatically apply',
            desc: 'With the click of a button, you can apply to 100s or 1000s of job applications that are relevant for you.',
        },
        {
            title: 'Never miss a job posting again',
            desc: 'Upload your CV once and let Pineapply find the best roles for you by matching your skills and experience across all sources.',
        },
        {
            title: 'Find the most up to date jobs',
            desc: 'Pineapply will scan all the sources for listings every hour!',
        },
    ];

    return (
        <Box className="features-container" sx={{ width: '100%', overflow: 'hidden' }}>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: { xs: '2rem', md: '4rem' },
                }}
            >
                <Typography
                    variant="h2"
                    color="appTheme"
                    component="h2"
                    sx={{
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        marginBottom: '3rem',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    Features
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: '2rem',
                        width: '100%',
                    }}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index} // Add a unique key prop here
                            className="feature-item"
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                padding: '20px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'appTheme',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                                }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    lineHeight: 1.6,
                                }}
                            >
                                {feature.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Features;
