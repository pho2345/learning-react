import { createContext, ReactNode, useContext, useLayoutEffect, useState } from 'react';

type ThemeContextType = {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const handleSetTheme = (theme: 'light' | 'dark') => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    useLayoutEffect(() => {

        const localTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (localTheme) {
            handleSetTheme(localTheme);
        }
    }, []);


    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
