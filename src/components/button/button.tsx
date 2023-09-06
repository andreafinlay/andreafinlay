import React, { FC } from 'react';
import { Styled } from './button.styled';

interface ButtonProps {
    onClick?: () => void;
    as?: 'button' | 'a';
    href?: string;
    target?: string;
    title?: string;
}

export const Button: FC<ButtonProps> = ({ onClick, children, as, ...rest }) => {
    return (
        <Styled.Link as={as} onClick={onClick} {...rest}>
            {children}
        </Styled.Link>
    );
};
