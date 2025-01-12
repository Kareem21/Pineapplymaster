import React, { useState } from 'react';
import './PricingComponent.css';
import { Box, Typography, Button } from '@mui/joy';

const PricingComponent = () => {
    const [selectedOption, setSelectedOption] = useState('100credits');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const planDetails = {
        '100credits': {
            title: '100 Credits',
            price: '$9.99',
            description:
                'Perfect for occasional job applications or resume support.',
        },
        '250credits': {
            title: '250 Credits',
            price: '$19.99',
            description:
                'Great for those actively applying and wanting more coverage.',
        },
        '500credits': {
            title: '500 Credits',
            price: '$29.99',
            description:
                'Ideal for power users or recruiters applying for multiple roles daily.',
        },
    };

    const { title, price, description } = planDetails[selectedOption];

    return (
        <Box className="pricing-container">
            <Typography
                variant="h2"
                component="h2"
                color="appTheme"
                sx={{ marginBottom: '2rem' }}
            >
                Simple Pricing,
                <br />
                <b>Powerful Features</b>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                Whether you’re starting out or need extra support, we have a plan for you.
            </Typography>

            {/* Toggle buttons for 100 / 250 / 500 credits */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                }}
            >
                <Button
                    variant={selectedOption === '100credits' ? 'solid' : 'outlined'}
                    color="appTheme"
                    onClick={() => handleOptionClick('100credits')}
                >
                    100 Credits
                </Button>
                <Button
                    variant={selectedOption === '250credits' ? 'solid' : 'outlined'}
                    color="appTheme"
                    onClick={() => handleOptionClick('250credits')}
                >
                    250 Credits
                </Button>
                <Button
                    variant={selectedOption === '500credits' ? 'solid' : 'outlined'}
                    color="appTheme"
                    onClick={() => handleOptionClick('500credits')}
                >
                    500 Credits
                </Button>
            </Box>

            {/* The active plan */}
            <Box className="pricing-card">
                <Typography variant="h3" component="h3" sx={{ marginBottom: '1rem' }}>
                    {title}
                </Typography>
                <Typography variant="h4" component="h4" sx={{ marginBottom: '1rem' }}>
                    {price}/month
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                    {description}
                </Typography>
                <Button
                    color="appTheme"
                    variant="solid"
                    sx={{
                        fontSize: '1.2rem',
                        padding: '0.75rem 2rem',
                    }}
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default PricingComponent;
