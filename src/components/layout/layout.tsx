import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { Header } from '../header/header';
import { GlobalStyles } from '../../globalStyles';
import { useSiteMetadata } from '../../hooks';

interface LayoutProps {
    children: ReactNode;
}

const LayoutBody = styled('div')`
    box-sizing: border-box;
    padding-top: 96px;
    font-family: 'Inter';
`;

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
            <LayoutBody>
                <main>{childrenWithProps}</main>
            </LayoutBody>
        </>
    );
};
