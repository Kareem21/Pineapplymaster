import React from 'react';
import './home.css';
import { Typed } from 'react-typed';

function Home() {
    return (
        <div className="home-container">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Pineapply AI</h1>
                    <Typed
                        strings={[
                            "Streamline your Dubai Job Search...",
                            "Auto-apply for top positions...",
                            "Your personal AI recruiter."
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </div>
            </section>

            {/* FEATURES SECTION (with a large banner behind) */}
            <section className="features-section">
                <div className="features-header">
                    <h2>Features</h2>
                </div>
                <div className="features-cards">
                    <div className="feature-card">Automatic Job Matching</div>
                    <div className="feature-card">Auto-Apply with One Click</div>
                    <div className="feature-card">Dashboard & Credits Tracking</div>
                </div>
            </section>
        </div>
    );
}

export default Home;
