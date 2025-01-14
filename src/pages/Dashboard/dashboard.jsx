
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Modal, Card } from '@mui/joy';
import CreditsCard from './creditsCard';
import PreferredTitlesCard from './preferredTitlesCard';
import JobsInQueue from './jobsInQueue';
import ResumeCard from './resumeCard';

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

    return (
        <Box sx={{ p: 2, backgroundColor: 'background.surface' }}>
            <Typography level="h4" sx={{ mb: 2 }}>
                Dashboard
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: '1fr 1fr 1fr'
                },
                gap: 2,
                mb: 3
            }}>
                <CreditsCard />
                <ResumeCard />
                <PreferredTitlesCard />
            </Box>

            <JobsInQueue />

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: '1fr 1fr 1fr'
                },
                gap: 2,
                mt: 3
            }}>
                {jobs.map((job, index) => (
                    <Card
                        key={index}
                        variant="outlined"
                        sx={{
                            p: 2,
                            '&:hover': {
                                boxShadow: 'md',
                                borderColor: 'primary.500'
                            }
                        }}
                    >
                        <Typography level="h6" sx={{ mb: 1 }}>
                            {job.title}
                        </Typography>
                        <Typography sx={{ color: 'primary.600', mb: 1 }}>
                            {job.company_name}
                        </Typography>
                        <Typography level="body2" sx={{ mb: 0.5 }}>
                            📍 {job.location}
                        </Typography>
                        <Typography level="body2" sx={{ mb: 1 }}>
                            {job.experience_level}
                        </Typography>
                        <Typography level="body2" sx={{
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {job.description}
                        </Typography>
                        <Typography level="body3" sx={{ color: 'neutral.600' }}>
                            Posted: {new Date(job.listed_at).toLocaleDateString()}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;