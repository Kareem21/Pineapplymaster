import React from 'react';
import './dashboard.css';
import JobsInQueue from './JobsInQueue.jsx';
import CreditsCard from './CreditsCard.jsx';
import PreferredTitlesCard from './PreferredTitlesCard.jsx';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>User Dashboard</h1>
            <div className="dashboard-cards">
                <CreditsCard />
                <PreferredTitlesCard />
            </div>
            <JobsInQueue />
        </div>
    );
}

export default Dashboard;
