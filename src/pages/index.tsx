import React from 'react';
import { Content, Layout, SEO } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <SEO
                title="home"
                description="personal portfolio site for andrea finlay"
            />
            <Content />
        </Layout>
    );
};

export default IndexPage;
