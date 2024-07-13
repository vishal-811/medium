import { useState } from "react";
import { useAuth } from "../contexts/Auth";

export const Profile = () => {
     const { logout } =useAuth();
      const [ isClicked ,setIsClicked] =useState(false);
         const profilehandler=()=>{
             setIsClicked(!isClicked);
         }

      
    return (
      <div className="select-none">
        <button onClick={profilehandler} className="relative z-20">
          <div className="rounded-full h-10 w-10 flex items-center justify-center dark:bg-zinc-700 bg-zinc-100 text-white cursor-pointer shadow-lg transition-transform transform hover:scale-105 border dark:border-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Profile" className="dark:text-zinc-200 text-zinc-900">
                  <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
                  <path stroke="currentColor" strokeLinecap="round" d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"></path>
                </svg>
          </div>
        </button>
  
         {isClicked &&  <div className="border border-slate-200 dark:border-slate-700 absolute p-4 right-4 top-16 bg-white dark:bg-zinc-900 rounded-lg shadow-2xl transition-opacity opacity-1 group-hover:opacity-100">
          <div className="flex flex-col justify-center  space-y-4">
            <div className="flex space-x-3 my-2 items-center">
              <div className="border rounded-full p-1 bg-slate-100 dark:bg-slate-600 dark:border-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Profile" className="text-zinc-300">
                  <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
                  <path stroke="currentColor" strokeLinecap="round" d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"></path>
                </svg>
              </div>
              <p className="text-black dark:text-white text-lg">My Profile</p>
            </div>

            <div className="flex flex-row space-x-4">
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-900 dark:text-gray-100"
>
               <path
                 fillRule="evenodd"
                clipRule="evenodd"
                 d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5ZM6 5H18V19H6V5ZM8 7C8 6.44772 8.44772 6 9 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H9C8.44772 8 8 7.55228 8 7ZM8 10C8 9.44772 8.44772 9 9 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10ZM8 13C8 12.4477 8.44772 12 9 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H9C8.44772 14 8 13.5523 8 13Z"
               fill="currentColor"
            />
         </svg>
                 <a href={'/blogs'} className="text-black dark:text-white text-md hover:cursor-pointer hover:text-zinc-700">Blogs</a>
            </div>
  
            <button onClick={()=>{
                logout(); // calling a hook
            }}>
             <div className="flex space-x-4 ms-2 items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600">
                <path d="M9 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm font-medium text-red-600 cursor-pointer hover:text-red-800 transition-colors">Logout</p>
            </div>
            </button>
          </div>
        </div>}
      </div>
    );
  };
  