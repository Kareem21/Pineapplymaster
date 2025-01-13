// src/components/Dashboard/JobsInQueue.jsx
import React, { useState } from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemContent,
    Avatar,
    Checkbox,
    Switch,
    Box,
    Button,
    Tooltip,
    IconButton
} from '@mui/joy';
import WorkIcon from '@mui/icons-material/Work';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const JobsInQueue = () => {
    const [jobsInQueue, setJobsInQueue] = useState([
        { id: 1, title: "Senior Network Engineer", company: "TechCorp", selected: false },
        { id: 2, title: "Network Security Specialist", company: "SecureNet", selected: false },
        { id: 3, title: "Cloud Network Engineer", company: "CloudTech", selected: false },
        { id: 4, title: "Network Operations Manager", company: "NetOps Inc.", selected: false },
        { id: 5, title: "Wireless Network Engineer", company: "MobileNet", selected: false },
    ]);
    const [isAutopilot, setIsAutopilot] = useState(true);

    const handleJobSelect = (id) => {
        setJobsInQueue(jobsInQueue.map(job =>
            job.id === id ? { ...job, selected: !job.selected } : job
        ));
    };

    const handleToggleAutopilot = () => {
        setIsAutopilot(!isAutopilot);
    };

    const handleStartAutoApply = () => {
        console.log("Starting auto-apply process");
    };

    const handleStopAutoApply = () => {
        console.log("Stopping auto-apply process");
    };

    return (
        <Card variant="outlined" sx={{ mt: 3 }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography level="h4">Jobs in Queue</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 2 }}>
                        {isAutopilot ? 'Autopilot' : 'Manual mode'}
                        <Tooltip title="Click to learn more" variant="soft">
                            <IconButton sx={{ ml: 1 }}>
                                <HelpOutlineIcon />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                    <Switch checked={isAutopilot} onChange={handleToggleAutopilot} />
                </Box>
            </Box>
            <List>
                {jobsInQueue.map((job) => (
                    <ListItem key={job.id}>
                        <ListItemButton
                            onClick={() => !isAutopilot && handleJobSelect(job.id)}
                            sx={{
                                mb: 1,
                                bgcolor: '#f1f5f9',
                                borderRadius: 2,
                                '&:hover': {
                                    bgcolor: '#e2e8f0',
                                },
                            }}
                        >
                            {!isAutopilot && (
                                <Checkbox
                                    checked={job.selected}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleJobSelect(job.id);
                                    }}
                                    sx={{ mr: 2 }}
                                />
                            )}
                            <Avatar sx={{ mr: 2, bgcolor: '#3b82f6' }}>
                                <WorkIcon />
                            </Avatar>
                            <ListItemContent>
                                <Typography level="body1" fontWeight="medium">
                                    {job.title}
                                </Typography>
                                <Typography level="body2">{job.company}</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    variant="solid"
                    color="primary"
                    startDecorator={<PlayArrowIcon />}
                    onClick={handleStartAutoApply}
                    sx={{ width: '48%', height: '50px' }}
                >
                    Start Auto-Applying
                </Button>
                <Button
                    variant="solid"
                    color="danger"
                    startDecorator={<StopIcon />}
                    onClick={handleStopAutoApply}
                    sx={{ width: '48%', height: '50px' }}
                >
                    Stop Auto-applying
                </Button>
            </Box>
        </Card>
    );
};

export default JobsInQueue;
