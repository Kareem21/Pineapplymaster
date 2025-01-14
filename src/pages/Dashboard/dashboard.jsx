// Updated Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/joy';
import './dashboard.css';
import supabase from '../../../supabaseClient'; // Replace with your actual Supabase client initialization
import CreditsCard from './CreditsCard.jsx';
import PreferredTitlesCard from './PreferredTitlesCard.jsx';
import JobsInQueue from './JobsInQueue.jsx';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchJobs = async () => {
        const { data, error } = await supabase
            .from('scrapedjobsln')
            .select('title, company_name, location, experience_level, description, listed_at');

        if (error) {
            console.error('Error fetching jobs:', error);
        } else {
            setJobs(data);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleShowMore = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    return (
        <div className="dashboard-container">
            <h1>User Dashboard</h1>
            <div className="dashboard-cards">
                <CreditsCard />
                <PreferredTitlesCard />
            </div>
            <JobsInQueue />
            <Box className="dashboard-cards">
                {jobs.map((job, index) => (
                    <Box key={index} className="job-card">
                        <Typography variant="h5" className="job-title">
                            {job.title}
                        </Typography>
                        <Typography variant="body1" className="job-company">
                            {job.company_name}
                        </Typography>
                        <Typography variant="body2" className="job-location">
                            {job.location}
                        </Typography>
                        <Typography variant="body2" className="job-experience">
                            {job.experience_level}
                        </Typography>
                        <Typography variant="body2" className="job-description">
                            {job.description.length > 100
                                ? `${job.description.slice(0, 100)}...`
                                : job.description}
                        </Typography>
                        {job.description.length > 100 && (
                            <Button
                                size="small"
                                variant="outlined"
                                onClick={() => handleShowMore(job)}
                            >
                                Show More
                            </Button>
                        )}
                        <Typography variant="caption" className="job-listed-at">
                            Listed At: {new Date(job.listed_at).toLocaleDateString()}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {selectedJob && (
                <Modal open={isModalOpen} onClose={handleCloseModal}>
                    <Box className="modal-content">
                        <Typography variant="h4" className="modal-title">
                            {selectedJob.title}
                        </Typography>
                        <Typography variant="body1" className="modal-company">
                            {selectedJob.company_name}
                        </Typography>
                        <Typography variant="body2" className="modal-location">
                            {selectedJob.location}
                        </Typography>
                        <Typography variant="body2" className="modal-experience">
                            {selectedJob.experience_level}
                        </Typography>
                        <Typography variant="body2" className="modal-description">
                            {selectedJob.description}
                        </Typography>
                        <Typography variant="caption" className="modal-listed-at">
                            Listed At: {new Date(selectedJob.listed_at).toLocaleDateString()}
                        </Typography>
                        <Button onClick={handleCloseModal} variant="contained">
                            Close
                        </Button>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default Dashboard;