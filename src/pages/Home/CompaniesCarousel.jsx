import React, { useEffect, useRef } from 'react';
import './CompaniesCarousel.css';

const logos = [
    { src: '/damac.svg', alt: 'Damac' },
    { src: '/Emirates_logo.svg', alt: 'Emirates' },
    { src: '/Talabat_logo.svg', alt: 'Talabat' },
    { src: '/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: '/Google_logo.svg', alt: 'Google' },
    { src: '/Netflix_logo.svg', alt: 'Netflix' },
];

const CompaniesCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            // Duplicate the content to create a seamless loop
            scrollContainer.innerHTML += scrollContainer.innerHTML;

            let scrollAmount = 0;
            const scrollStep = 1; // Pixels to scroll per frame

            const scroll = () => {
                scrollAmount += scrollStep;
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    // Reset scroll when the first half is completely scrolled
                    scrollContainer.scrollLeft = 0;
                    scrollAmount = 0;
                } else {
                    scrollContainer.scrollLeft = scrollAmount;
                }
            };

            const intervalId = setInterval(scroll, 20); // Adjust scrolling speed here

            return () => clearInterval(intervalId); // Cleanup on unmount
        }
    }, []);

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Trusted by job seekers in the UAE</h2>
            <p className="carousel-subtitle">
                Our users have landed jobs at local companies such as
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
