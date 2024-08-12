import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Passions from './components/passions/Passions';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageContextType {
    page: string;
    setPage: (page: string) => void;
}

export const PageContext = createContext<PageContextType | undefined>(
    undefined
);

const App = () => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/';
    const [page, setPage] = useState('/');
    const navigate = useNavigate();
    useEffect(() => {
        navigate(page);
    }, [page]);
    return (
        <>
            <PageContext.Provider value={{ page, setPage }}>
                <AnimatePresence>
                    {showNavbar && <Navbar />}
                    <Routes location={location} key={location.pathname}>
                        <Route index element={<Landing />} />
                        <Route path={'/home'} element={<Home />} />
                        <Route path={'/technology'} element={<Technology />} />
                        <Route path={'/passions'} element={<Passions />} />
                    </Routes>
                </AnimatePresence>
            </PageContext.Provider>
        </>
    );
};

export default App;
