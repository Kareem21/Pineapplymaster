import React from 'react';
import styles from './CompaniesCarousel.css';

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
        <div className={styles.carouselContainer}>
            <h2 className={styles.carouselTitle}>Trusted by job seekers in the UAE</h2>
            <p className={styles.carouselSubtitle}>
                Our users have landed jobs at local companies such as
            </p>

            <div className={styles.logosContainer}>
                <div className={styles.logosTrack}>
                    <div className={styles.logosSlide}>
                        {tripleLogos.map((logo, index) => (
                            <div className={styles.logoItem} key={`logo-${index}`}>
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
