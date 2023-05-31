import React, { createContext, FC, ReactElement, useContext } from 'react';
import { ThemeMode } from '../theme';
import { useTheme } from '../hooks';

export interface ThemeContextProps {
    theme: ThemeMode;
    toggleTheme: () => void;
    hasMounted: boolean;
}

const defaultState = {
    theme: 'light' as ThemeMode,
    toggleTheme: () => null,
    hasMounted: false,
};

export const ThemeContext = createContext<ThemeContextProps>(defaultState);

export const ThemeContextProvider: FC = ({ children }): ReactElement => {
    const { theme, toggleTheme, hasMounted } = useTheme();

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                hasMounted,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextProps =>
    useContext<ThemeContextProps>(ThemeContext);
