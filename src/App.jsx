// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssVarsProvider, Box } from '@mui/joy';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import theme from './Theme';
import Home from './pages/Home/home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';

import './GlobalStyles.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <CssVarsProvider theme={theme}>
            <Box className="layout-root" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box component="header" sx={{ width: '100%', backgroundColor: 'white' }}>
                    <Navbar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
                </Box>

                <Box component="main" sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                    </Routes>
                </Box>

                <Box component="footer" sx={{ width: '100%' }}>
                    <Footer />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}

export default App;