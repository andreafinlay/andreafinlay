import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Header } from './header';
import { GlobalStyles } from '../globalStyles';

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

    return (
        <>
            <GlobalStyles />
            <Header siteAuthor={data.site.siteMetadata.author} />
            <LayoutBody>
                <main>{children}</main>
                {/* <footer>© {new Date().getFullYear()}</footer> */}
            </LayoutBody>
        </>
    );
};
