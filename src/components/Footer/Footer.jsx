
import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Email, Phone, LinkedIn } from "@mui/icons-material";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Pineapply</h2>
                    <p>Your AI-powered job search assistant. Find and apply to the best opportunities in Dubai and across the UAE.</p>
                    <p>© 2024 Pineapply. All rights reserved.</p>
                    <div className="social-links">
                        <Link to="#"><Instagram /></Link>
                        <Link to="#"><Facebook /></Link>
                        <Link to="#"><LinkedIn /></Link>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h3>Platform</h3>
                        <ul>
                            <li>Features</li>
                            <li>How it Works</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li><Email /> support@pineapply.ai</li>
                            <li>Dubai, United Arab Emirates</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;