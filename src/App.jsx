import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssVarsProvider, Box } from '@mui/joy';
import './fonts.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import theme from './Theme';
import Home from './pages/Home/home';
import Dashboard from '../src/pages/Dashboard/dashboard';
import Contact from './pages/Contact/Contact';
import { Analytics } from "@vercel/analytics/react";
import { clarity } from 'react-microsoft-clarity';

import './GlobalStyles.css';
import Login from '../src/pages/Login/Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        clarity.init(import.meta.env.VITE_CLARITY_ID);
    }, []);

    return (
        <CssVarsProvider theme={theme}>
            <Box
                className="layout-root"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    '& > main': {
                        flex: '1 0 auto', // Changed to flex-grow: 1, flex-shrink: 0
                        display: 'flex',
                        flexDirection: 'column',
                    },
                    '& > footer': {
                        flexShrink: 0, // Prevent footer from shrinking
                        marginTop: 0, // Remove any top margin from footer
                    }
                }}
            >
                <Box
                    component="header"
                    sx={{ width: '100%', backgroundColor: 'white' }}
                >
                    <Navbar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
                </Box>

                <Box component="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Box>

                <Box
                    component="footer"
                    sx={{
                        width: '100%',
                        mt: 0 // Ensure no top margin
                    }}
                >
                    <Footer />
                </Box>
                <Analytics />
            </Box>
        </CssVarsProvider>
    );
}

export default App;