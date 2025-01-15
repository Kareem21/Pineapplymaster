// Features.jsx
import React from 'react';
import './Features.css';

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
                    <h2 className="features-title">Features</h2>
                    <div className="features-grid">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <h4>{feature.title}</h4>
                                <p>{feature.desc}</p>
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