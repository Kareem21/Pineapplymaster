import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Stats Section */}
                <div className="stats">
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="dot blue"></span>
                    <span className="stats-text">1,675,000+ Applications Sent</span>
                </div>

                {/* Main Content Section */}
                <h1>
                    Try Pineapply<br />
                    Free Today
                </h1>


                <button className="get-started-btn">
                    Get Started Free
                </button>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="left-section">
                        <span className="copyright">© Pineapply {currentYear}</span>
                        <div className="social-links">
                            <a href="https://instagram.com/pineapply" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </a>
                            <a href="https://linkedin.com/company/pineapply" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <Link to="/blog">Blog</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/contact" className="chat-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.5 20.5L5.3994 19.8229C5.78392 19.72 6.19121 19.7791 6.54753 19.9565C7.88837 20.6244 9.40034 21 11 21"
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;