import { ReactElement, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    let currentTheme: Theme =
        useContext(ThemeContext) === 'light' ? 'light' : 'dark';

    return currentTheme;
}
