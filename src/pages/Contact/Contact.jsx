import React, { useState } from 'react';
import { Box, Typography, Input, Textarea, Button, Accordion, AccordionDetails, AccordionSummary } from '@mui/joy';
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const FAQ_ITEMS = [
    {
        question: "How does your job search automation work?",
        answer: "Our AI-powered system scans multiple job boards and company websites in real-time. It automatically submits your application to relevant positions based on your preferences and qualifications, saving you hours of manual job searching and application filling."
    },
    {
        question: "What sets your service apart from traditional job boards?",
        answer: "Unlike traditional job boards where you manually search and apply, our system automates the entire process. We use AI to match your profile with job requirements, ensure your applications are tailored to each position, and can apply to hundreds of jobs on your behalf while you focus on networking and interview prep."
    },
    {
        question: "How many jobs can I apply to with your service?",
        answer: "Our system can apply to up to 100 jobs per day on your behalf, depending on your subscription plan. Each application is carefully matched to ensure relevance and quality, rather than just quantity."
    },
    {
        question: "Is my data secure with your automation service?",
        answer: "Yes, we take data security seriously. All your information is encrypted and stored securely. We only access the information needed for job applications, and you have full control over what data is shared with employers."
    },
    {
        question: "Can I customize which jobs the automation targets?",
        answer: "Absolutely! You can set specific criteria including job titles, locations, salary ranges, and companies. Our system will only apply to jobs that match your preferences, and you can adjust these settings at any time."
    }
];

const Contact = () => {
    const [captchaToken, setCaptchaToken] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/1234567890', '_blank');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert('Please verify that you are not a robot.');
            return;
        }
        // Form submission logic here
    };

    return (
        <Box className="contact-page">
            <Box className="contact-header">
                <Typography variant="h1" className="contact-title">
                    Get in Touch
                </Typography>
                <Typography variant="body1" className="contact-subtitle">
                    We're here to help you with any questions or concerns.
                </Typography>
            </Box>

            <Box className="contact-content">
                {/* Left Side - WhatsApp and FAQ */}
                <Box className="contact-left-section">
                    <Box className="contact-option" onClick={handleWhatsAppClick}>
                        <FaWhatsapp className="contact-icon whatsapp-icon" />
                        <Box className="contact-option-content">
                            <Typography variant="h3" className="contact-option-title">
                                WhatsApp Support
                            </Typography>
                            <Typography variant="body2" className="contact-option-description">
                                Chat with us instantly for immediate assistance
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="faq-section">
                        <Typography variant="h2" className="faq-title">
                            Frequently Asked Questions
                        </Typography>
                        <Box className="faq-list">
                            {FAQ_ITEMS.map((item, index) => (
                                <Accordion key={index} className="faq-item">
                                    <AccordionSummary
                                        indicator={<FaChevronDown />}
                                        className="faq-question"
                                    >
                                        <Typography>{item.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="faq-answer">
                                        <Typography>{item.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Right Side - Contact Form */}
                <Box className="contact-form-container">
                    <Typography variant="h2" className="form-title">
                        Send Us a Message
                    </Typography>
                    <Box
                        component="form"
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            className="form-input"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            className="form-input"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            className="form-input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            className="form-input"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                        />
                        <Textarea
                            className="form-textarea"
                            placeholder="Your Message"
                            name="message"
                            minRows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />

                        <ReCAPTCHA
                            sitekey="6LfhadcqAAAAADWEuOqzKLE7kBfK9Vc46GuTb0_4"
                            onChange={(token) => setCaptchaToken(token)}
                            className="recaptcha-container"
                        />

                        <Button type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;