import { useContext } from 'react';
import { PageContext } from '../../App';

const GoTech = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page, setPage } = context;
    return (
        <div
            onClick={() => setPage('/technology')}
            className="flex flex-row justify-center items-center rounded-full col-start-2 row-start-3 
    hover:scale-105 hover:cursor-pointer w-14 h-14 bg-sky-400 border-4 border-gray-900 transition ease-in-out duration-300"
        >
            <img className="w-6" src="navbar-technology.png" alt="Technology" />
        </div>
    );
};

export default GoTech;
