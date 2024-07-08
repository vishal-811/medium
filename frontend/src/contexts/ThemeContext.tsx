import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const themeContext = createContext<ThemeContextType | undefined>(undefined);

interface themeProps{
    children:ReactNode
}
export const ThemeProvider:React.FC<themeProps> =({children})=>{
      console.log({children})
      const [darkmode , setDarkmode] =useState(true);

      useEffect(()=>{
          if(darkmode){
             document.documentElement.classList.add('dark')
          }
          else{
            document.documentElement.classList.remove('dark')
          }
      },[darkmode])

      const toggleDarkmode=()=>{
        console.log("click hua");
           setDarkmode(!darkmode)
        };

      return (
        <themeContext.Provider value={{darkmode , toggleDarkmode}} >
              {children}
        </themeContext.Provider>
      )
}

export const useTheme=()=>{
    const context = useContext(themeContext);

    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}