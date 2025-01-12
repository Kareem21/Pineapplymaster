import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div className="home-container">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Your personal A.I Recruiter</h1>
                    <Typewriter
                        options={{
                            strings: [
                                'Streamline your job search',
                                'Increase your chance of getting a job by 6x',
                                'Automatically apply to relevant jobs'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
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
