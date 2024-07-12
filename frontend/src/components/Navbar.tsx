import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import { useEffect, useState } from "react";
import { Profile } from "./Profile";
import { useAuth } from "../contexts/Auth";

export const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const showSearchInput = windowWidth >= 678;

    return (
        <nav className="sticky top-0 z-20 bg-white dark:bg-zinc-900 shadow-md">
            <div className="flex flex-row justify-between p-4 md:px-12">
                <div className="flex items-center space-x-4 md:space-x-12">
                    <a href="/">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-600 tracking-tight">
                            BlogBuddy
                        </h2>
                    </a>
                    {showSearchInput ? (
                        <div className="relative">
                            <input
                                className="border border-gray-400 rounded-3xl h-8 p-2 pl-10 dark:bg-black dark:text-white focus:outline-none"
                                placeholder="Search Blogs.."
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-label="Search"
                                className="absolute left-2 top-1 dark:text-gray-300 cursor-pointer"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-label="Search"
                            className="dark:text-gray-300 cursor-pointer"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
                <div className="flex items-center space-x-4 md:space-x-12">
                    <DarkModeToggle />
                    {isAuthenticated ? (
                        <Profile />
                    ) : (
                        <button
                            onClick={() => {
                                navigate('/signin');
                            }}
                            className="bg-blue-700 dark:bg-blue-800 p-1 ps-4 pe-4 text-lg rounded-lg text-white font-medium outline-neutral-300 hover:bg-blue-600"
                        >
                            Log in
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};
