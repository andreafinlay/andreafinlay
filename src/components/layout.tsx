/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import { GlobalStyles } from '../globalStyles';

interface LayoutProps {
    children: ReactNode;
}

const LayoutBody = styled('div')`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    font-family: 'Inter';
`;

const Layout = ({ children }: LayoutProps) => {
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
                <footer>© {new Date().getFullYear()}</footer>
            </LayoutBody>
        </>
    );
};

export default Layout;
