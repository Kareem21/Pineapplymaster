import React, { useEffect, useRef } from 'react';
import './CompaniesCarousel.css';

const logos = [
    { src: '/damac.svg', alt: 'Damac' },
    { src: '/Emirates_logo.svg', alt: 'Emirates' },
    { src: '/Talabat_logo.svg', alt: 'Talabat' },
];

const CompaniesCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (scrollContainer) {
            let scrollAmount = 0;
            const scrollStep = 1; // Pixels to scroll per frame
            const maxScroll = scrollContainer.scrollWidth / 2; // Half of scrollable width

            const scroll = () => {
                scrollAmount += scrollStep;
                if (scrollAmount >= maxScroll) {
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
            <h2 className="carousel-title">Trusted by job seekers who’ve landed at top companies</h2>
            <p className="carousel-subtitle">
                Our users have secured positions at industry-leading companies such as
            </p>
            <div className="carousel-track" ref={scrollRef}>
                {logos.concat(logos).map((logo, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompaniesCarousel;
