
import { useTheme } from "../contexts/ThemeContext"

export const DarkModeToggle=()=>{
     const  {darkmode ,toggleDarkmode} =useTheme();
    return(
              <button onClick={toggleDarkmode} className="p-2 border solid rounded-2xl w-12 flex justify-center backdrop-blur border-gray-400  dark:border-gray-200">
                 
                  {darkmode ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-sun h-4 w-4  dark:text-neutral-500 text-neutral-500"><circle cx="12" cy="12" r="4"></circle>
                             <path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path>
                             <path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2">
                             </path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                           
                           :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className="lucide lucide-moon h-4 w-4   dark:text-neutral-500 text-neutral-500">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                          }
              </button>
    )
}