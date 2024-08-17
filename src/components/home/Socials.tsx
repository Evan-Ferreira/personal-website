import linkedin from '../../assets/images/home/linkedin.png';
import github from '../../assets/images/home/github.png';
import coffee from '../../assets/images/home/coffee.png';

const Socials = () => {
    return (
        <div className="flex flex-row justify-center md:justify-start items-center space-x-8 md:h-40 h-20">
            <div
                className="hover:duration-75 hover:animate-none hover:bg-blue-600 hover:text-gray-200 hover:cursor-pointer
shadow-lg shadow-zinc-500 rounded-lg flex justify-center 
items-center h-16 text-3xl bg-yellow-400 text-gray-100 font-GelionBold xl:w-2/12 md:w-4/12 w-0 text-center hidden md:flex"
            >
                Resume
            </div>
            <a
                className="hover:scale-110 transition ease-in-out duration-200"
                href="https://www.linkedin.com/in/evan-ferreira/"
            >
                <img className="md:w-14 w-12" src={linkedin} alt="LinkedIn" />
            </a>
            <a
                className="hover:scale-110 transition ease-in-out duration-200"
                href="https://github.com/Evan-Ferreira"
            >
                <img className="md:w-14 w-12" src={github} alt="GitHub" />
            </a>
            <a
                className="hover:scale-110 transition ease-in-out duration-200"
                href="https://calendly.com/evanjfer/coffee-w-evan"
            >
                <img className="md:w-14 w-12" src={coffee} alt="Coffee" />
            </a>
        </div>
    );
};

export default Socials;
