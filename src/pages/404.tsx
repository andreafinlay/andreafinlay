import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Layout, SEO } from '../components';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NotFoundPage = () => (
    <Layout>
        <SEO pageTitle="404" pageDescription="this page could not be found." />
        <Wrapper>
            <h1>OOPSIE WOOPSIE</h1>
            <p>you just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/">go back home</Link>
        </Wrapper>
    </Layout>
);

export default NotFoundPage;
