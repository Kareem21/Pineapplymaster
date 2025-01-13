import React from 'react';
import { Card, Typography } from '@mui/joy';

const CreditsCard = () => {
    const totalCredits = 50; // Example placeholder. In real code, fetch from user data.

    return (
        <Card variant="outlined" sx={{ width: 300, p: 2 }}>
            <Typography level="h5" sx={{ mb: 1 }}>
                Total Credits
            </Typography>
            <Typography level="body1" fontWeight="bold" fontSize="1.5rem">
                {totalCredits}
            </Typography>
        </Card>
    );
};

export default CreditsCard;
