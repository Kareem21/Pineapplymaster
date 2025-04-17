import React from 'react';
import './Features.css';
import { Typography } from '@mui/joy';  // Import if you haven't already

const Features = () => {
    const featuresData = [
        {
            title: 'One click to automatically apply',
            desc: 'With the click of a button, you can apply to 100s or 1000s of job applications that are relevant for you.',
        },
        {
            title: 'Never miss a job posting again',
            desc: 'Upload your CV once and let Pineapply find the best roles for you by matching your skills and experience across all sources.',
        },
        {
            title: 'Find the most up-to-date jobs',
            desc: 'Pineapply will scan all the sources for listings every hour!',
        },
    ];

    return (
        <div className="features-section">
            <div className="features-container">
                <div className="features-content">
                    <Typography
                        component="h2"
                        className="features-title"
                        sx={{
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 800  // Extra Bold for main title
                        }}
                    >
                        Features
                    </Typography>
                    <div className="features-grid">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">
                                    <div className="icon-circle"></div>
                                </div>
                                <Typography
                                    component="h4"
                                    sx={{
                                        fontFamily: 'var(--font-primary)',
                                        fontWeight: 700  // Bold for feature titles
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    component="p"
                                    sx={{
                                        fontFamily: 'var(--font-primary)',
                                        fontWeight: 400  // Regular for descriptions
                                    }}
                                >
                                    {feature.desc}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="features-image"></div>
        </div>
    );
};

export default Features;