import React, { ReactNode, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Header } from './header';
import { GlobalStyles } from '../globalStyles';
import { breakpoint } from '../helpers';

interface LayoutProps {
    children: ReactNode;
}

const LayoutBody = styled('div')`
    margin: calc(1.45rem + 10px) 3rem;
    position: absolute;
    top: calc(1.45rem + 10px);
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 0px 1.0875rem 1.45rem;
    font-family: 'Inter';

    ${breakpoint('md')`
        margin: calc(1.45rem + 18px) 0 0 0; 
        padding-left: 0;
        padding-right: 0;
    `};
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);
    const [slideRefs, setSlideRefs] = useState();

    const childrenWithProps = React.Children.map(children, (child) => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { setSlideRefs });
        }

        return child;
    });

    return (
        <>
            <GlobalStyles />
            <Header
                siteAuthor={data.site.siteMetadata.author}
                slideRefs={slideRefs}
            />
            <LayoutBody>
                <main>{childrenWithProps}</main>
                {/* <footer>© {new Date().getFullYear()}</footer> */}
            </LayoutBody>
        </>
    );
};
