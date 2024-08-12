import { PageContext } from '../../App';
import { useContext } from 'react';
import navbar_person from '../../assets/images/navbar/navbar_person.png';

const GoHome = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { setPage } = context;
    return (
        <div
            onClick={() => setPage('/home')}
            className="relative rounded-full col-start-2 row-start-1 w-14 bg-amber-300 border-4 border-gray-900 
    hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
        >
            <img
                className="absolute -bottom-1.5"
                src={navbar_person}
                alt="Home"
            />
        </div>
    );
};

export default GoHome;
