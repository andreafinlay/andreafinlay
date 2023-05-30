import React, { FC } from 'react';
import { Styled } from './linkButton.styled';

interface LinkButtonProps {
    onClick: () => void;
}

export const LinkButton: FC<LinkButtonProps> = ({ onClick, children }) => (
    <Styled.Button onClick={onClick}>{children}</Styled.Button>
);
