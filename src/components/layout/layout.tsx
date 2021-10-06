import React, { ReactNode } from 'react';

import { GlobalStyles } from '../../globalStyles';
import { useSlidesContext } from '../../contexts';
import { useSiteMetadata } from '../../hooks';
import { Header } from '../header';
import { Styled } from './layout.styled';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { author } = useSiteMetadata();
    const { slideRefs } = useSlidesContext();

    return (
        <>
            <GlobalStyles />
            <Header siteAuthor={author} slideRefs={slideRefs} />
            <Styled.LayoutBody>
                <main>{children}</main>
            </Styled.LayoutBody>
        </>
    );
};
