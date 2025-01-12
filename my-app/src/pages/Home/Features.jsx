import React from 'react';
import './Features.css';

const FeaturesSection = () => {
    return (
        <div className="features-container">
            <div className="features-content">
                <h1 className="features-title">Features</h1>
                <div className="features-grid">
                    <div className="feature-item">
                        <h2>One click to automatically apply to all relevant jobs!</h2>
                        <p>
                            With the click of a button, you can apply to 100s or 1000s of job applications that are relevant for you.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h2>Never miss a job posting again!</h2>
                        <p>
                            Upload your CV once and let Pineapply find the best roles for you by matching your skills and experience to new job postings across all sources on the web.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h2>Find the most up-to-date jobs</h2>
                        <p>
                            Pineapply will scan all the sources for listings every hour!
                        </p>
                    </div>
                </div>
            </div>
            <div className="banner-container">
                <img src="path/to/banner-image.jpg" alt="Banner" className="banner-image" />
            </div>
        </div>
    );
};

export default FeaturesSection;
