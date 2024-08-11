import { useNavigate } from 'react-router-dom';

const GoHome = () => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/home')}
            className="relative rounded-full col-start-2 row-start-1 w-14 bg-amber-300 border-4 border-gray-900 
    hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
        >
            <img
                className="absolute -bottom-1.5"
                src="navbar-person.png"
                alt="Home"
            />
        </div>
    );
};

export default GoHome;
