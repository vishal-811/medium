import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";
import { Profile } from "./Profile";
import { useAuth } from "../contexts/Auth";

export const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    return (
        <nav className="sticky top-0 z-20 bg-white dark:bg-zinc-900 shadow-md bg-opacity-60 backdrop-blur-lg filter">
            <div className="flex flex-row justify-between p-4 md:px-12">
                <div className="flex items-center space-x-4 md:space-x-12">
                    <a href="/">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-600 tracking-tight">
                            BlogBuddy
                        </h2>
                    </a>
                    
                </div>
                <div className="flex items-center space-x-4 md:space-x-12">
                    <DarkModeToggle />
                    {isAuthenticated ? (
                        <Profile />
                    ) : (
                        <button
                            onClick={()=>navigate('/signin')}
                            className="bg-black dark:bg-blue-800 p-1 ps-4 pe-4 text-lg rounded-lg text-white font-medium outline-neutral-300 relative"
                        >
                            Log in

                            <span className="absolute animate-shine top-0 -left-8 h-full w-[80%] bg-gradient-to-r from-transparent via-white to-transparent dark:via-transparent  "> </span>
                        </button>
                       
                    )}
                </div>
            </div>
        </nav>
    );
};
