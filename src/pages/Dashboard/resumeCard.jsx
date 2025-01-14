
// ResumeCard.jsx
import React, { useState, useRef } from 'react';
import { Card, Typography, Button, Box } from '@mui/joy';

const ResumeCard = () => {
    const [currentResume, setCurrentResume] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file?.type === 'application/pdf') {
            setCurrentResume(file);
        }
    };

    return (
        <Card variant="outlined" sx={{ p: 2 }}>
            <Typography level="h6" sx={{ mb: 2 }}>
                Your Resume
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {currentResume && (
                    <Box sx={{
                        p: 1.5,
                        bgcolor: 'background.level1',
                        borderRadius: 'sm',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography level="body2">
                            {currentResume.name}
                        </Typography>
                    </Box>
                )}

                <input
                    type="file"
                    accept=".pdf"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />

                <Button
                    variant="outlined"
                    onClick={() => fileInputRef.current?.click()}
                    sx={{ width: '100%' }}
                >
                    {currentResume ? 'Replace Resume' : 'Upload Resume (PDF)'}
                </Button>
            </Box>
        </Card>
    );
};

export default ResumeCard;