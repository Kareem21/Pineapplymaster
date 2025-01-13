// src/components/Dashboard/PreferredTitlesCard.jsx
import React from 'react';
import { Card, Typography, List, ListItem } from '@mui/joy';

const PreferredTitlesCard = () => {
    // Example placeholders
    const titles = ['Senior Network Engineer', 'Network Security Specialist'];

    return (
        <Card variant="outlined" sx={{ width: 300, p: 2 }}>
            <Typography level="h5" sx={{ mb: 1 }}>
                Preferred Titles
            </Typography>
            <List>
                {titles.map((title, idx) => (
                    <ListItem key={idx}>
                        <Typography level="body1">
                            {title}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};

export default PreferredTitlesCard;
