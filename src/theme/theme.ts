export type ThemeMode = 'light' | 'dark';

export interface Theme {
    body: string;
    text: string;
    border: string;
    link: string;
    field: string;
    button: string;
    buttonHover: string;
    fieldFocus: string;
}

export const lightTheme = {
    accent: '#87afff',
    body: '#fff',
    text: '#000',
    border: '#000',
    link: '#0049D6',
    field: '#fff',
    fieldFocus: '#0049D6',
    button: '#fb96c0',
    buttonHover: '#F965A3',
};

export const darkTheme = {
    accent: '#000',
    body: '#000',
    text: '#fff',
    border: '#fff',
    link: '#65f9bb',
    field: '#000',
    fieldFocus: '#65f9bb',
    button: '#a8287f',
    buttonHover: '#CF349D',
};
