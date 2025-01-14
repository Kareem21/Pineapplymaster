import React from 'react';
import './companiesCarousel.css';

const CompaniesCarousel = () => {
    const logos = [
        { src: '/adnoc-logo-9C246DC903-seeklogo.com.svg', alt: 'ADNOC' },
        { src: '/chalhoub-group-logo-vector.svg', alt: 'Chalhoub Group' },
        { src: '/damac.svg', alt: 'Damac' },
        { src: '/DP_World_2021_logo.svg', alt: 'DP World' },
        { src: '/emirates-nbd-bank-seeklogo.svg', alt: 'Emirates NBD' },
        { src: '/Emirates_logo.svg', alt: 'Emirates' },
        { src: '/Fly_Dubai_logo_2010_03.svg', alt: 'Fly Dubai' },
        { src: '/Majid_Al_Futtaim_logo.svg', alt: 'Majid Al Futtaim' },
        { src: '/Talabat_logo.svg', alt: 'Talabat' },
    ];

    // Duplicate logos for smooth infinite scrolling
    const tripleLogos = [...logos, ...logos, ...logos];

    return (
        <div className="companies-carousel-container">
            <div className="carousel-header">
                <h2 className="carousel-title">Trusted by job seekers in the UAE</h2>
                <p className="carousel-subtitle">
                    Our users have landed jobs at local companies such as
                </p>
            </div>
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
