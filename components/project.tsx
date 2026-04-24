import Image from 'next/image';

export type ImageInfo = {
    src: string;
    alt: string;
};

export function Project({
    title,
    description,
    date,
    imageInfo,
}: {
    title: string;
    description: string;
    date: string;
    imageInfo: ImageInfo;
    otherLink?: string;
    githubLink?: string;
}) {
    return (
        <div className="w-full relative min-h-72 flex flex-col gap-2">
            <div className="object-hidden max-h-64 h-full relative">
                <Image
                    src={imageInfo.src}
                    alt={imageInfo.alt}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h3>
                        {title}
                        <span className="text-fg-secondary">– {date}</span>
                    </h3>
                    <div className="flex gap-1">
                        <a
                            href="mailto:evanjfer@gmail.com"
                            className="flex items-center justify-center"
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3335 3.66666H3.66683C2.6585 3.66666 1.84266 4.49166 1.84266 5.49999L1.8335 16.5C1.8335 17.5083 2.6585 18.3333 3.66683 18.3333H18.3335C19.3418 18.3333 20.1668 17.5083 20.1668 16.5V5.49999C20.1668 4.49166 19.3418 3.66666 18.3335 3.66666ZM18.3335 7.33332L11.0002 11.9167L3.66683 7.33332V5.49999L11.0002 10.0833L18.3335 5.49999V7.33332Z"
                                    fill="#B3B3B3"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/Evan-Ferreira"
                            className="flex items-center justify-center"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 22 22"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline text-fg-primary transition-all duration-100 hover:text-u-300"
                            >
                                <path
                                    d="M11.0759 0.5C6.04592 0.499354 1.75807 4.14728 0.952733 9.11239C0.147393 14.0775 3.06236 18.8937 7.83468 20.483C8.34867 20.5755 8.53268 20.2599 8.53268 19.9885C8.53268 19.7449 8.52446 19.0993 8.52138 18.241C5.66872 18.8578 5.06632 16.8655 5.06632 16.8655C4.87852 16.2456 4.47479 15.7135 3.92834 15.3657C3.00315 14.7294 3.99927 14.7438 3.99927 14.7438C4.65788 14.8341 5.23753 15.2243 5.569 15.8005C5.84958 16.3107 6.32227 16.6876 6.88205 16.8477C7.44184 17.0077 8.04235 16.9375 8.55016 16.6527C8.59788 16.1326 8.8293 15.6464 9.20293 15.2814C6.92697 15.0234 4.53382 14.1434 4.53382 10.2134C4.52119 9.19696 4.89865 8.2143 5.58853 7.46768C5.27639 6.58291 5.31315 5.61243 5.69133 4.7538C5.69133 4.7538 6.55176 4.47727 8.51007 5.80338C10.1896 5.34285 11.9622 5.34285 13.6418 5.80338C15.6011 4.47625 16.4605 4.7538 16.4605 4.7538C16.8404 5.61202 16.8772 6.58318 16.5633 7.46768C17.2557 8.21424 17.6329 9.19947 17.616 10.2175C17.616 14.1578 15.2208 15.0234 12.9366 15.2773C13.4293 15.7811 13.682 16.4722 13.6305 17.1749C13.6305 18.5463 13.6181 19.6524 13.6181 19.9885C13.6181 20.263 13.8011 20.5817 14.3244 20.4809C19.0947 18.889 22.0065 14.0725 21.1995 9.10867C20.3925 4.14488 16.1049 0.49885 11.0759 0.5Z"
                                    className="text-fg-tertiary"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="text-fg-secondary">{description}</p>
            </div>
        </div>
    );
}
