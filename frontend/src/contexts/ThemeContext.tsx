import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const themeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize darkmode state from localStorage
  const [darkmode, setDarkmode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkTheme");
    return storedDarkMode === "true";  //if there is a darktheme than we set darkmode state variable as true else false;
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkmode]);

  const toggleDarkmode = () => {
    const newDarkMode = !darkmode;
    localStorage.setItem("darkTheme", newDarkMode.toString());  //we can store value as a string
    setDarkmode(newDarkMode);
  };

  return (
    <themeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
