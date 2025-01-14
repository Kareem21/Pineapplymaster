
// CreditsCard.jsx
import React from 'react';
import { Card, Typography, CircularProgress, Box } from '@mui/joy';

const CreditsCard = () => {
    const totalCredits = 50;
    const maxCredits = 100;
    const percentage = (totalCredits / maxCredits) * 100;

    return (
        <Card variant="outlined" sx={{ p: 2 }}>
            <Typography level="h6" sx={{ mb: 2 }}>
                Available Credits
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CircularProgress
                        size="lg"
                        determinate
                        value={percentage}
                        color={percentage < 20 ? 'danger' : 'primary'}
                        sx={{ '--CircularProgress-size': '60px' }}
                    >
                        <Typography level="body1" fontWeight="lg">
                            {totalCredits}
                        </Typography>
                    </CircularProgress>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                    <Typography level="body2" sx={{ color: 'text.secondary' }}>
                        Total Limit
                    </Typography>
                    <Typography level="h5" fontWeight="lg">
                        {maxCredits}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default CreditsCard;