// Contact.jsx
import React from 'react';
import { Box, Typography, Input, Textarea, Button, Card } from '@mui/joy';
import { MessageCircle, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
    };

    return (
        <Box className="contact-container">
            {/* Support Options */}
            <Box className="support-options-container">
                <Typography
                    level="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        fontWeight: 'bold',
                        color: '#492d6f',
                        textAlign: 'center',
                        marginBottom: '1rem'
                    }}
                >
                    Need Help?
                </Typography>

                <Typography
                    sx={{
                        fontSize: '1.1rem',
                        color: '#666',
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                    }}
                >
                    We're here to help. Choose how you'd like to reach us.
                </Typography>

                <Box className="support-cards-grid">
                    <Card
                        className="support-card"
                        onClick={() => document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' })}
                    >
                        <MessageCircle size={32} color="#492d6f" />
                        <Typography level="h4" sx={{ my: 2, color: '#492d6f' }}>
                            General Support
                        </Typography>
                        <Typography sx={{ color: '#666' }}>
                            Send us a message and we'll respond within 24 hours
                        </Typography>
                    </Card>

                    <Card
                        className="support-card"
                        onClick={() => window.location.href = 'mailto:support@pineapply.ai'}
                    >
                        <Mail size={32} color="#492d6f" />
                        <Typography level="h4" sx={{ my: 2, color: '#492d6f' }}>
                            Email Support
                        </Typography>
                        <Typography sx={{ color: '#666' }}>
                            Get help with your subscription or technical issues
                        </Typography>
                    </Card>

                    <Card
                        className="support-card"
                        onClick={handleWhatsAppClick}
                    >
                        <FaWhatsapp size={32} color="#492d6f" />
                        <Typography level="h4" sx={{ my: 2, color: '#492d6f' }}>
                            WhatsApp Chat
                        </Typography>
                        <Typography sx={{ color: '#666' }}>
                            Get immediate assistance via WhatsApp
                        </Typography>
                    </Card>
                </Box>
            </Box>

            {/* Contact Form */}
            <Box className="contact-form-container">
                <Card className="contact-form-card">
                    <Typography
                        level="h2"
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2rem' },
                            fontWeight: 'bold',
                            color: '#492d6f',
                            textAlign: 'center',
                            mb: 3
                        }}
                    >
                        Send us a message
                    </Typography>

                    <Box
                        component="form"
                        className="contact-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Input placeholder="First Name" required sx={{ flex: 1 }} />
                            <Input placeholder="Last Name" required sx={{ flex: 1 }} />
                        </Box>
                        <Input placeholder="Email" type="email" required />
                        <Input placeholder="Subject" required />
                        <Textarea
                            placeholder="Your Message"
                            minRows={4}
                            required
                            sx={{
                                fontSize: '1rem',
                                '&:hover': { borderColor: '#492d6f' },
                                '&:focus': { borderColor: '#492d6f', boxShadow: '0 0 0 3px rgba(73, 45, 111, 0.1)' }
                            }}
                        />
                        <Button
                            type="submit"
                            sx={{
                                backgroundColor: '#492d6f',
                                color: 'white',
                                padding: '0.875rem',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#3E175F',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Card>
            </Box>

            {/* WhatsApp Button */}
            <button
                className="whatsapp-button"
                onClick={handleWhatsAppClick}
                aria-label="Contact on WhatsApp"
            >
                <FaWhatsapp size={24} />
                <span>Chat with us</span>
            </button>
        </Box>
    );
};

export default Contact;