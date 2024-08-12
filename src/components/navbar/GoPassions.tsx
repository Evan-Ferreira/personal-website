import { PageContext } from './Navbar';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoPassions = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page, setPage } = context;
    const navigate = useNavigate();

    useEffect(() => {
        navigate(page);
    }, [page]);
    return (
        <div
            onClick={() => setPage('/passions')}
            className="flex flex-row justify-center items-center rounded-full col-start-2 row-start-2 w-14 
    hover:scale-105 hover:cursor-pointer h-14 bg-red-400 border-4 border-gray-900 transition ease-in-out duration-300"
        >
            <img className="w-6" src="navbar-passions.png" alt="Passions" />
        </div>
    );
};

export default GoPassions;
