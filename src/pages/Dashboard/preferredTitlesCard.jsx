// PreferredTitlesCard.jsx
import React, { useState } from 'react';
import { Card, Typography, Box, Button, Input, IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';

const PreferredTitlesCard = ({ onSearch }) => {
    const [titles, setTitles] = useState([
        'Senior Network Engineer',
        'Network Security Specialist'
    ]);
    const [newTitle, setNewTitle] = useState('');

    const handleAddTitle = async () => {
        const trimmed = newTitle.trim();
        if (trimmed && !titles.includes(trimmed)) {
            setTitles([...titles, trimmed]);
            setNewTitle('');

            // Trigger the search callback (if provided) with the newly added title
            if (onSearch) {
                onSearch(trimmed);
            }
        }
    };

    const handleRemoveTitle = (titleToRemove) => {
        setTitles(titles.filter(title => title !== titleToRemove));
        // Optionally, you could also trigger a search again when removing
        // but that depends on your app’s desired behavior
    };

    return (
        <Card variant="outlined" sx={{ p: 2 }}>
            <Typography level="h6" sx={{ mb: 2 }}>
What roles are you searching for?             </Typography>

            <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                <Input
                    placeholder="Digital marketer, Civil engineer, professor, etc..."
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
