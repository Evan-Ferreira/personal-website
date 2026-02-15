import Image from 'next/image';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    style: 'italic',
    variable: '--font-instrument-serif',
});

export function Header() {
    return (
        <header className="flex flex-col lg:w-fit w-full bento-card items-center justify-center mx-auto gap-2">
            <h1
                className={`${instrumentSerif.className} text-4xl text-fg-primary leading-none tracking-wider transition-all duration-300`}
            >
                Evan Ferreira
            </h1>
            <div className="lg:hidden flex gap-4 mx-auto">
                <a
                    href="https://github.com/Evan-Ferreira"
                    className="flex items-center justify-center hover:rotate-12 duration-300 transition-all ease-in-out"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline text-fg-primary transition-all duration-100 hover:text-u-300"
                    >
                        <path
                            d="M11.0759 0.5C6.04592 0.499354 1.75807 4.14728 0.952733 9.11239C0.147393 14.0775 3.06236 18.8937 7.83468 20.483C8.34867 20.5755 8.53268 20.2599 8.53268 19.9885C8.53268 19.7449 8.52446 19.0993 8.52138 18.241C5.66872 18.8578 5.06632 16.8655 5.06632 16.8655C4.87852 16.2456 4.47479 15.7135 3.92834 15.3657C3.00315 14.7294 3.99927 14.7438 3.99927 14.7438C4.65788 14.8341 5.23753 15.2243 5.569 15.8005C5.84958 16.3107 6.32227 16.6876 6.88205 16.8477C7.44184 17.0077 8.04235 16.9375 8.55016 16.6527C8.59788 16.1326 8.8293 15.6464 9.20293 15.2814C6.92697 15.0234 4.53382 14.1434 4.53382 10.2134C4.52119 9.19696 4.89865 8.2143 5.58853 7.46768C5.27639 6.58291 5.31315 5.61243 5.69133 4.7538C5.69133 4.7538 6.55176 4.47727 8.51007 5.80338C10.1896 5.34285 11.9622 5.34285 13.6418 5.80338C15.6011 4.47625 16.4605 4.7538 16.4605 4.7538C16.8404 5.61202 16.8772 6.58318 16.5633 7.46768C17.2557 8.21424 17.6329 9.19947 17.616 10.2175C17.616 14.1578 15.2208 15.0234 12.9366 15.2773C13.4293 15.7811 13.682 16.4722 13.6305 17.1749C13.6305 18.5463 13.6181 19.6524 13.6181 19.9885C13.6181 20.263 13.8011 20.5817 14.3244 20.4809C19.0947 18.889 22.0065 14.0725 21.1995 9.10867C20.3925 4.14488 16.1049 0.49885 11.0759 0.5Z"
                            className="fill-current"
                        ></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/evan-ferreira/"
                    className="flex items-center justify-center hover:rotate-12 duration-300 transition-all ease-in-out"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 50 50"
                        className="m-auto"
                    >
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                </a>
                <a
                    href="https://x.com/evanjfer"
                    className="flex justify-center items-center hover:rotate-12 duration-300 transition-all ease-in-out"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                </a>
            </div>
            <div className="lg:hidden flex text-xs gap-1">
                <p>Software Engineer,</p>
                <div className="inline-flex gap-2 align-middle">
                    <p>Queen's Commerce</p>
                    <Image
                        width={18}
                        height={18}
                        src="/queens.png"
                        alt="Queen's Logo"
                        className="object-contain"
                    ></Image>
                </div>
            </div>
            <ul className="max-lg:hidden flex gap-6 list-disc items-center marker:text-xs text-xs">
                <li className="list-none text-center">Software Engineer</li>
                <li className="text-center pl-1 pt-1">
                    <div className="inline-flex gap-2 align-middle">
                        <p>Queen's Commerce</p>
                        <Image
                            width={18}
                            height={18}
                            src="/queens.png"
                            alt="Queen's Logo"
                            className="object-contain"
                        ></Image>
                    </div>
                </li>
                <li className="pl-1 max-lg:hidden pt-1">
                    <div className="inline-flex gap-2 align-middle">
                        <a
                            href="https://github.com/Evan-Ferreira"
                            className="flex items-center justify-center hover:rotate-12 duration-300 transition-all ease-in-out"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline text-fg-primary transition-all duration-100 hover:text-u-300"
                            >
                                <path
                                    d="M11.0759 0.5C6.04592 0.499354 1.75807 4.14728 0.952733 9.11239C0.147393 14.0775 3.06236 18.8937 7.83468 20.483C8.34867 20.5755 8.53268 20.2599 8.53268 19.9885C8.53268 19.7449 8.52446 19.0993 8.52138 18.241C5.66872 18.8578 5.06632 16.8655 5.06632 16.8655C4.87852 16.2456 4.47479 15.7135 3.92834 15.3657C3.00315 14.7294 3.99927 14.7438 3.99927 14.7438C4.65788 14.8341 5.23753 15.2243 5.569 15.8005C5.84958 16.3107 6.32227 16.6876 6.88205 16.8477C7.44184 17.0077 8.04235 16.9375 8.55016 16.6527C8.59788 16.1326 8.8293 15.6464 9.20293 15.2814C6.92697 15.0234 4.53382 14.1434 4.53382 10.2134C4.52119 9.19696 4.89865 8.2143 5.58853 7.46768C5.27639 6.58291 5.31315 5.61243 5.69133 4.7538C5.69133 4.7538 6.55176 4.47727 8.51007 5.80338C10.1896 5.34285 11.9622 5.34285 13.6418 5.80338C15.6011 4.47625 16.4605 4.7538 16.4605 4.7538C16.8404 5.61202 16.8772 6.58318 16.5633 7.46768C17.2557 8.21424 17.6329 9.19947 17.616 10.2175C17.616 14.1578 15.2208 15.0234 12.9366 15.2773C13.4293 15.7811 13.682 16.4722 13.6305 17.1749C13.6305 18.5463 13.6181 19.6524 13.6181 19.9885C13.6181 20.263 13.8011 20.5817 14.3244 20.4809C19.0947 18.889 22.0065 14.0725 21.1995 9.10867C20.3925 4.14488 16.1049 0.49885 11.0759 0.5Z"
                                    className="fill-current"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/evan-ferreira/"
                            className="flex items-center justify-center hover:rotate-12 duration-300 transition-all ease-in-out"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 50 50"
                                className="m-auto"
                            >
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://x.com/evanjfer"
                            className="flex justify-center items-center hover:rotate-12 duration-300 transition-all ease-in-out"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </header>
    );
}
