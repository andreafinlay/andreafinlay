import React, { FC } from 'react';
import { Styled } from './toggleButton.styled';
import { useThemeContext } from '../../contexts/themeContext';
import { Moon, Sun } from '../../assets/icons';

export const ToggleButton: FC = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <Styled.Button onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={36} /> : <Sun size={36} />}
        </Styled.Button>
    );
};
