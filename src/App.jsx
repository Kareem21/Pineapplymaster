import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy';
import Navbar from './components/Navbar/Navbar';  // Changed from Navbar
import Footer from './components/Footer/Footer';  // Changed from Footer
import theme from './Theme';
import Home from './pages/Home/home.jsx';  // Matches your current import

function Contact() {
    return <h1 style={{ padding: '50px' }}>Contact Page</h1>;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <CssVarsProvider theme={theme}>
            <div className="app">
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Additional routes */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </CssVarsProvider>
    );
}

export default App;
