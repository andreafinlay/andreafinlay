import React from 'react';
import styled from 'styled-components';

import { useMenuContext } from '../../contexts';
import { Portal } from '../portal';

const Wrapper = styled('div')`
    background-color: #87afff;
    height: 300px;
    width: 300px;
    border: 5px solid black;
    border-top: none;
    border-right: none;
    display: flex;
    flex-direction: column;
    z-index: 10000000;
    position: absolute;
    top: 96px;
    right: 0;
    font-family: 'Inter';
`;

export const Menu: React.FC = () => {
    const { isMenuOpen } = useMenuContext();

    return isMenuOpen ? (
        <Portal>
            <Wrapper>Menu</Wrapper>
        </Portal>
    ) : null;
};
