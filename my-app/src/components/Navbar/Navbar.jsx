import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
    return (
        <nav className="navbar">
            <div className="nav-left">
                {/* You can put a logo here if you want */}
                <Link to="/" className="logo">
                    Pineapply AI
                </Link>
            </div>

            <div className="nav-center">
                <Link to="/">Home</Link>
                <Link to="/uaelaborlawbot">UAE Labor Law Bot</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="nav-right">
                {isLoggedIn ? (
                    <button className="logout-btn" onClick={onLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/login" className="create-acc-btn">Create an account</Link>
                    </>
                )}
                <button className="beta-btn">Beta</button>
            </div>
        </nav>
    );
}

export default Navbar;
