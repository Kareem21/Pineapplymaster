import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Stack, Typography, Divider, Box, Card, Avatar, Grid, Input, Button } from "@mui/joy";
import headerImg from '/header.svg?url';
import './Login.css';
import GoogleButton from 'react-google-button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [magicLinkSent, setMagicLinkSent] = useState(false);

    const handleSignWithGoogle = () => {
        console.log('Google sign in clicked');
    };

    const handleMagicLinkSignIn = (e) => {
        e.preventDefault();
        setMagicLinkSent(true);
    };

    return (
        <Stack sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Grid container sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Card sx={{
                        maxWidth: 400,
                        width: '100%',
                        padding: '32px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '20px'
                        }}>
                            <Avatar
                                src="/logo.png"
                                alt="Pineapply AI Logo"
                                sx={{ width: 60, height: 60 }}
                            />
                        </Box>
                        <Typography level="h4" textAlign="center" gutterBottom>
                            Welcome to Pineapply AI
                        </Typography>
                        <Typography level="body-md" textAlign="center" gutterBottom>
                            Please sign in to continue
                        </Typography>
                        <GoogleButton
                            onClick={handleSignWithGoogle}
                            style={{ width: '100%', marginBottom: '20px' }}
                        />
                        <Divider sx={{ margin: '20px 0' }}>OR</Divider>
                        {!magicLinkSent ? (
                            <form onSubmit={handleMagicLinkSignIn}>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    sx={{ marginBottom: '10px' }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="solid"
                                    color="primary"
                                >
                                    Sign in with Magic Link
                                </Button>
                            </form>
                        ) : (
                            <Typography
                                level="body-sm"
                                textAlign="center"
                                color="success"
                            >
                                Magic link sent! Check your email to complete sign-in.
                            </Typography>
                        )}
                        <div className="message-container">
                            {/* Error message would go here */}
                        </div>
                        <Divider sx={{ margin: '20px 0' }} />
                        <Typography level="body-sm" textAlign="center">
                            By signing in, you agree to our{' '}
                            <Link to="/terms">Terms of Service</Link> and{' '}
                            <Link to="/privacy">Privacy Policy</Link>.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Box
                        component="img"
                        src={headerImg}
                        alt="Header Image"
                        sx={{
                            width: '100%',
                            maxHeight: '100vh',
                            objectFit: 'cover'
                        }}
                    />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default LoginPage;