import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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
