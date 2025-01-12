// src/components/Dashboard/PreferredTitlesCard.jsx
import React from 'react';
import { Card, Typography } from '@mui/joy';

function PreferredTitlesCard() {
    // Example placeholders
    const titles = ['Senior Network Engineer', 'Network Security Specialist'];

    return (
        <Card variant="outlined" sx={{ width: 300 }}>
            <Typography level="h5" sx={{ mb: 1 }}>
                Preferred Titles
            </Typography>
            {titles.map((title, idx) => (
                <Typography key={idx} level="body1">
                    {title}
                </Typography>
            ))}
        </Card>
    );
}

export default PreferredTitlesCard;
