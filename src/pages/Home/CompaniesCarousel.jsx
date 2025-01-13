import React from 'react';
import './CompaniesCarousel.css';

const CompaniesCarousel = () => {
    const logos = [
        { src: '/damac.svg', alt: 'Damac' },
        { src: '/Talabat_logo.svg', alt: 'Talabat' },
        { src: '/Microsoft_logo.svg', alt: 'Microsoft' },
        { src: '/Google_logo.svg', alt: 'Google' },
        { src: '/Netflix_logo.svg', alt: 'Netflix' }
    ];

    // Create three sets of logos for smooth infinite scrolling
    const tripleLogos = [...logos, ...logos, ...logos];

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Trusted by job seekers in the UAE</h2>
            <p className="carousel-subtitle">
                Our users have landed jobs at local companies such as
            </p>

            <div className="logos-container">
                <div className="logos-track">
                    <div className="logos-slide">
                        {tripleLogos.map((logo, index) => (
                            <div className="logo-item" key={`logo-${index}`}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    width="120"
                                    height="60"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompaniesCarousel;