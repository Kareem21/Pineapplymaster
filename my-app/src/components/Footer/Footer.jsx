import React from 'react';
import './Footer.css';
import instagramLogo from '../../assets/instagram-logo.png';
import facebookLogo from '../../assets/facebook-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2>Pineapply</h2>
                    <p>Find job listings from multiple sites and automatically apply, all in one place.</p>
                    <p>Copyright 2024 Pineapply</p>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h3>Explore</h3>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact us</h3>
                        <ul>
                            <li><img src={instagramLogo} alt="Instagram" />Instagram</li>
                            <li><img src={facebookLogo} alt="Facebook" />Facebook</li>
                            <li>Email: kareemy9000@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
