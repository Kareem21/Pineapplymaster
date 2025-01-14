import './pricingComponent.css';
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/joy';

const PricingComponent = () => {
    const [selectedOption, setSelectedOption] = useState('100credits');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const planDetails = {
        '100credits': {
            title: '100 Credits',
            costPerApplication: '40',
            price: 'AED 100',
            description: 'Perfect for passive job seekers',
        },
        '250credits': {
            title: '250 Credits',
            costPerApplication: '40',
            price: 'AED 250',
            description: 'Great for those actively applying and wanting to apply to more jobs',
        },
        '500credits': {
            title: '500 Credits',
            costPerApplication: '20',
            price: 'AED 500',
            description: 'Ideal for people who urgently need to land a role',
        },
    };

    const { title, price, description, costPerApplication } = planDetails[selectedOption];

    return (
        <Box className="pricing-container">
            <div className="pricing-header">
                <Typography
                    variant="h1"
                    component="h1"
                    color="appTheme"
                    className="pricing-title"
                >
                    Simple Pricing,
                    <br />
                    <b>Powerful Features</b>
                </Typography>

                <div className="credit-explanation">
                    <Typography variant="h4" component="p">
                        1 Credit = 1 Job Application
                    </Typography>
                    <Typography variant="body1">
                        Choose the plan that matches your job search intensity
                    </Typography>
                </div>
            </div>

            <Box className="pricing-options">
                <Button
                    className={`option-button ${selectedOption === '100credits' ? 'selected' : ''}`}
                    variant={selectedOption === '100credits' ? 'solid' : 'outlined'}
                    color="appTheme"
                    onClick={() => handleOptionClick('100credits')}
                >
                    100 Credits
                </Button>
                <Button
                    className={`option-button ${selectedOption === '250credits' ? 'selected' : ''}`}
                    variant={selectedOption === '250credits' ? 'solid' : 'outlined'}
                    color="appTheme"
                    onClick={() => handleOptionClick('250credits')}
                >
                    250 Credits
                </Button>
                <Button
                    className={`option-button ${selectedOption === '500credits' ? 'selected' : ''}`}
                    variant={selectedOption === '500credits' ? 'solid' : 'outlined'}
                    color="appTheme"
                    onClick={() => handleOptionClick('500credits')}
                >
                    500 Credits
                </Button>
            </Box>

            <Box className="pricing-card">
                <Typography variant="h3" component="h3" className="card-title">
                    {title}
                </Typography>
                <Typography variant="body2" className="cost-per-application">
                    Only {costPerApplication} fils per application
                </Typography>
                <Typography variant="h4" component="h4" className="price">
                    {price}
                </Typography>
                <Typography variant="body1" className="description">
                    {description}
                </Typography>
                <Button
                    color="appTheme"
                    variant="solid"
                    className="get-started-button"
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default PricingComponent;