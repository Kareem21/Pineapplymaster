import React from 'react';
import { Typography, Box } from '@mui/joy';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CardComponent from '../Home/CardComponent'; // or wherever your CardComponent is

const HowItWorks = () => {
    const steps = [
        {
            title: 'Upload your CV',
            description:
                'Upload your CV so Pineapply can match your skills to available jobs.',
        },
        {
            title: 'Pineapply finds jobs',
            description:
                'We scan all online job sources to find opportunities relevant for you.',
        },
        {
            title: 'Automatic Applications',
            description:
                'We apply on your behalf for the roles you select—just sit back and relax!',
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                padding: { xs: '2rem', md: '4rem' },
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h2"
                component="h2"
                color="appTheme"
                sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                    marginBottom: '2rem',
                }}
            >
                <b>How It Works</b>
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column', // stacked on small screens
                        md: 'row', // side by side on medium+ screens
                    },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        {/* Card */}
                        <Box
                            sx={{
                                flex: '1',
                                backgroundColor: 'purple',
                                color: '#fff',
                                padding: '2rem',
                                borderRadius: '8px',
                                minWidth: { xs: '100%', md: '280px' },
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardComponent title={step.title} description={step.description} />
                        </Box>

                        {/* Arrow (hidden on mobile) */}
                        {index < steps.length - 1 && (
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    alignItems: 'center',
                                    fontSize: '3rem',
                                    color: '#f1f963', /* or #ffd700, etc. */
                                }}
                            >
                                <KeyboardDoubleArrowRightIcon fontSize="inherit" />
                            </Box>
                        )}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default HowItWorks;
