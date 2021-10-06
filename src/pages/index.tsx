import React from 'react';

import { SlidesContextProvider } from '../contexts';
import { Content, Layout, SEO } from '../components';

const IndexPage = () => {
    return (
        <SlidesContextProvider>
            <Layout>
                <SEO
                    pageTitle="home"
                    pageDescription="personal portfolio site for andrea finlay"
                />
                <Content />
            </Layout>
        </SlidesContextProvider>
    );
};

export default IndexPage;
