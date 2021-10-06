import React, { ReactNode } from 'react';

import { GlobalStyles } from '../../globalStyles';
import { useSiteMetadata } from '../../hooks';
import { Header } from '../header';
import { Styled } from './layout.styled';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { author } = useSiteMetadata();

    return (
        <>
            <GlobalStyles />
            <Header siteAuthor={author} />
            <Styled.LayoutBody>
                <main>{children}</main>
            </Styled.LayoutBody>
        </>
    );
};
