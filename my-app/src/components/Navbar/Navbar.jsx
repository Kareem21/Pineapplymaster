import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    Pineapply AI
                </Link>

                <div className={`nav-elements ${isMenuOpen && 'active'}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/uaelaborlawbot">UAE Labor Law Bot</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {isLoggedIn ? (
                            <li><button className="logout-btn" onClick={onLogout}>Logout</button></li>
                        ) : (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/login" className="create-acc-btn">Create an account</Link></li>
                            </>
                        )}
                        <li><button className="beta-btn">Beta</button></li>
                    </ul>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
