import React from 'react';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Passions from './components/passions/Passions';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    const showNavbar = location.pathname !== '/';
    return (
        <>
            {showNavbar && <Navbar />}
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Landing />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/technology'} element={<Technology />} />
                    <Route path={'/passions'} element={<Passions />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
