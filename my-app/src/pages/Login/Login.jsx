import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://YOUR-POCKETBASE-URL');
// Replace with your actual PocketBase URL

function Login({ onLogin }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleGoogleLogin = async () => {
        // Placeholder for Google OAuth
        // In PocketBase, you might do social auth flow or something else
        try {
            // e.g. pb.collection('users').authWithOAuth2({ ... })
            onLogin();
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    const handleMagicLink = async () => {
        // Placeholder for Magic Link flow
        // For instance, you might email a link or something else
        try {
            // e.g. pb.collection('users').requestPasswordReset(email);
            onLogin();
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome to Pineapply AI</h2>
                <button className="google-btn" onClick={handleGoogleLogin}>
                    Sign in with Google
                </button>
                <div className="separator">OR</div>
                <input
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="magic-link-btn" onClick={handleMagicLink}>
                    Sign in with Magic Link
                </button>
            </div>
        </div>
    );
}

export default Login;
