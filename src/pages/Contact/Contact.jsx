// Redesigned Contact.jsx
import React from 'react';
import { Box, Typography, Input, Textarea, Button } from '@mui/joy';
import { FaWhatsapp, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
    };

    return (
        <Box className="contact-page">
            {/* Header Section */}
            <Box className="contact-header">
                <Typography variant="h1" className="contact-title">
                    Get in Touch
                </Typography>
                <Typography variant="body1" className="contact-subtitle">
                    We’re here to help you with any questions or concerns.
                </Typography>
            </Box>

            {/* Contact Options */}
            <Box className="contact-options">
                <Box
                    className="contact-option"
                    onClick={() =>
                        document
                            .querySelector('.contact-form')
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    <FaCommentDots className="contact-icon" />
                    <Typography variant="h3" className="contact-option-title">
                        General Inquiry
                    </Typography>
                    <Typography
                        variant="body2"
                        className="contact-option-description"
                    >
                        Send us a message and we’ll get back to you within 24
                        hours.
                    </Typography>
                </Box>

                <Box
                    className="contact-option"
                    onClick={() =>
                        (window.location.href = 'mailto:support@pineapply.ai')
                    }
                >
                    <FaEnvelope className="contact-icon" />
                    <Typography variant="h3" className="contact-option-title">
                        Email Support
                    </Typography>
                    <Typography
                        variant="body2"
                        className="contact-option-description"
                    >
                        Reach out via email for subscription or technical
                        support.
                    </Typography>
                </Box>

                <Box className="contact-option" onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="contact-icon whatsapp-icon" />
                    <Typography variant="h3" className="contact-option-title">
                        WhatsApp Chat
                    </Typography>
                    <Typography
                        variant="body2"
                        className="contact-option-description"
                    >
                        Chat with us instantly for immediate assistance.
                    </Typography>
                </Box>
            </Box>

            {/* Contact Form */}
            <Box className="contact-form-container">
                <Typography variant="h2" className="form-title">
                    Send Us a Message
                </Typography>
                <Box
                    component="form"
                    className="contact-form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <Input
                        className="form-input"
                        placeholder="First Name"
                        required
                    />
                    <Input
                        className="form-input"
                        placeholder="Last Name"
                        required
                    />
                    <Input
                        className="form-input"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <Input
                        className="form-input"
                        placeholder="Subject"
                        required
                    />
                    <Textarea
                        className="form-textarea"
                        placeholder="Your Message"
                        minRows={4}
                        required
                    />
                    <Button type="submit" className="submit-button">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
