export type ThemeMode = 'light' | 'dark';

export interface Theme {
    accent: string;
    body: string;
    text: string;
    border: string;
    link: string;
    field: string;
    fieldFocus: string;
    button: string;
    buttonHover: string;
    buttonShadow: string;
    toggleHover: string;
}

export const lightTheme: Theme = {
    accent: '#fff',
    body: '#fff',
    text: '#000',
    border: '#000',
    link: '#0049D6',
    field: '#fff',
    fieldFocus: '#0049D6',
    button: '#fb96c0',
    buttonHover: '#F965A3',
    toggleHover: '#373737',
    buttonShadow: '#000',
};

export const darkTheme: Theme = {
    accent: '#000',
    body: '#000',
    text: '#fff',
    border: '#fff',
    link: '#65f9bb',
    field: '#000',
    fieldFocus: '#65f9bb',
    button: '#a8287f',
    buttonHover: '#CF349D',
    toggleHover: '#e6e6e6',
    buttonShadow: '#fff',
};
