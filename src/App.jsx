import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy';
import './App.css'; // If you still want separate app-level CSS
import theme from './Theme';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/home.jsx';

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
