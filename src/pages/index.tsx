import React from 'react';
import { ThemeContextProvider, SlidesContextProvider } from '../contexts';
import { Content, Layout, SEO } from '../components';

const IndexPage = () => (
    <ThemeContextProvider>
        <SlidesContextProvider>
            <Layout>
                <SEO
                    pageTitle="home"
                    pageDescription="personal portfolio site for andrea finlay"
                />
                <Content />
            </Layout>
        </SlidesContextProvider>
    </ThemeContextProvider>
);

export default IndexPage;
