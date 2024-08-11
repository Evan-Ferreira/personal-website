import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import App from './App';
function RoutedApp() {
    const location = useLocation();
    const showNavbar = location.pathname !== '/';
    return (
        <>
            {showNavbar && <Navbar />}
            <AnimatePresence>
                <App></App>
            </AnimatePresence>
        </>
    );
}

export default RoutedApp;
