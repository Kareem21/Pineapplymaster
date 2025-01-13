import React from 'react';
import { Box, Typography } from '@mui/joy';
import './how-it-works.css';

const steps = [
    {
        title: 'Upload your CV',
        description: 'Upload your CV so Pineapply can match your skills to available jobs.',
        icon: '📄',
    },
    {
        title: 'Pineapply finds jobs',
        description: 'We scan all online job sources to find every single opportunity relevant for you.',
        icon: '🔍',
    },
    {
        title: 'Automatic Applications',
        description: 'We apply on your behalf for the roles you select or all of them! just sit back and relax!',
        icon: '✨',
    },
];

const HowItWorks = () => {
    return (
        <Box className="how-it-works-container">
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    color: '#ffffff',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                }}
            >
                How It Works
            </Typography>

            <Box className="how-it-works-steps">
                {steps.map((step, index) => (
                    <Box key={index} className="step-card">
                        <Box className="step-icon">{step.icon}</Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '1rem',
                                textAlign: 'center',
                            }}
                        >
                            {step.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1rem',
                                color: '#e4e4e4',
                                textAlign: 'center',
                                maxWidth: '280px',
                                margin: '0 auto',
                            }}
                        >
                            {step.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HowItWorks;
