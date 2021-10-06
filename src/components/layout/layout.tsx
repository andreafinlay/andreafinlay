import React, { ReactNode, useState } from 'react';

import { GlobalStyles } from '../../globalStyles';
import { useSiteMetadata } from '../../hooks';
import { Header } from '../header';
import { Styled } from './layout.styled';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { author } = useSiteMetadata();
    const [slideRefs, setSlideRefs] = useState();

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setSlideRefs });
        }

        return child;
    });

    return (
        <>
            <GlobalStyles />
            <Header siteAuthor={author} slideRefs={slideRefs} />
            <Styled.LayoutBody>
                <main>{childrenWithProps}</main>
            </Styled.LayoutBody>
        </>
    );
};
