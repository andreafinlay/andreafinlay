import React, { FC } from 'react';
import { Styled } from './toggleButton.styled';
import { Moon, Sun } from '../../assets/icons';
import { useThemeContext } from '../../contexts';

export const ToggleButton: FC = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <Styled.Button onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? <Moon size={36} /> : <Sun size={36} />}
        </Styled.Button>
    );
};
