import React, { useEffect, useRef } from 'react';
import './CompaniesCarousel.css';

const logos = [
    { src: '/images/logo-adobe.png', alt: 'Adobe' },
    { src: '/images/logo-google.png', alt: 'Google' },
    { src: '/images/logo-meta.png', alt: 'Meta' },
    { src: '/images/logo-netflix.png', alt: 'Netflix' },
    { src: '/images/logo-amazon.png', alt: 'Amazon' },
    { src: '/images/logo-airbnb.png', alt: 'Airbnb' },
    { src: '/images/logo-spotify.png', alt: 'Spotify' },
    { src: '/images/logo-tesla.png', alt: 'Tesla' },
    { src: '/images/logo-bloomberg.png', alt: 'Bloomberg' },
    { src: '/images/logo-microsoft.png', alt: 'Microsoft' },
    // Add or remove as you wish
];

const CompaniesCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        let intervalId;
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            intervalId = setInterval(() => {
                scrollContainer.scrollLeft += 1;
                // if we reach the end, jump back
                if (
                    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                    scrollContainer.scrollWidth
                ) {
                    scrollContainer.scrollLeft = 0;
                }
            }, 20); // adjust speed here
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Trusted by job seekers who’ve landed at top companies</h2>
            <p className="carousel-subtitle">
                Our users have secured positions at industry-leading companies such as
            </p>
            <div className="carousel-track" ref={scrollRef}>
                {logos.map((logo, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompaniesCarousel;
