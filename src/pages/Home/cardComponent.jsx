import React from 'react';
import './card-component.css';

const CardComponent = ({ title, description, backgroundImage }) => {
    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'appTheme'
    };

    return (
        <div className="mucard" style={cardStyle}>
            <h2 className="mucard-text">{title}</h2>
            <p className="mucard-text">{description}</p>
        </div>
    );
};

export default CardComponent;
