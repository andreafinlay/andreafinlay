import React, { ReactNode } from 'react';

import { GlobalStyles } from '../../globalStyles';
import { MenuContextProvider } from '../../contexts';
import { useSiteMetadata } from '../../hooks';
import { Header } from '../header';
import { Styled } from './layout.styled';
import { Menu } from '../menu';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { author } = useSiteMetadata();

    return (
        <>
            <GlobalStyles />
            <MenuContextProvider>
                <Header siteAuthor={author} />
                <Menu />
            </MenuContextProvider>
            <Styled.LayoutBody>
                <main>{children}</main>
            </Styled.LayoutBody>
        </>
    );
};
