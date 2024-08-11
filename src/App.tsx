import { useState } from 'react';
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Passions from './components/passions/Passions';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();
    const showNavbar = location.pathname !== '/';
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {showNavbar && <Navbar />}
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
