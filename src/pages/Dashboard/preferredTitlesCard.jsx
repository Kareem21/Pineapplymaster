
// PreferredTitlesCard.jsx
import React, { useState } from 'react';
import { Card, Typography, Box, Button, Input, IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';

const PreferredTitlesCard = () => {
    const [titles, setTitles] = useState([
        'Senior Network Engineer',
        'Network Security Specialist'
    ]);
    const [newTitle, setNewTitle] = useState('');

    const handleAddTitle = () => {
        if (newTitle.trim() && !titles.includes(newTitle.trim())) {
            setTitles([...titles, newTitle.trim()]);
            setNewTitle('');
        }
    };

    const handleRemoveTitle = (titleToRemove) => {
        setTitles(titles.filter(title => title !== titleToRemove));
    };

    return (
        <Card variant="outlined" sx={{ p: 2 }}>
            <Typography level="h6" sx={{ mb: 2 }}>
                Preferred Job Titles
            </Typography>

            <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                <Input
                    placeholder="Add job title..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    sx={{ flexGrow: 1 }}
                />
                <Button
                    onClick={handleAddTitle}
                    disabled={!newTitle.trim()}
                >
                    Save
                </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {titles.map((title, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 1,
                            borderRadius: 'sm',
                            bgcolor: 'background.level1'
                        }}
                    >
                        <Typography level="body2">{title}</Typography>
                        <IconButton
                            size="sm"
                            variant="plain"
                            color="neutral"
                            onClick={() => handleRemoveTitle(title)}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </Card>
    );
};

export default PreferredTitlesCard;