import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

// Pages
import Home from './pages/Home/home.jsx';
// import LaborBotPage from './pages/LaborBot/laborbotpage';
// import Login from './pages/Login/login';
// import Dashboard from './pages/Dashboard/dashboard';

function Contact() {
    return <h1 style={{ padding: '50px' }}>Contact Page</h1>;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <CssVarsProvider>
            <div className="app">
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Uncomment to add more routes */}
                        {/* <Route path="/uaelaborlawbot" element={<LaborBotPage />} /> */}
                        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </CssVarsProvider>
    );
}

export default App;
