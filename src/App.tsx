import React from 'react';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Extended from './components/extended/Extended';
import Technology from './components/technology/Technology';
import Passions from './components/passions/Passions';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Landing />} />
                <Route path={'/home'} element={<Home />} />
                <Route path={'/technology'} element={<Technology />} />
                <Route path={'/passions'} element={<Passions />} />
            </Routes>
        </>
    );
}

export default App;
