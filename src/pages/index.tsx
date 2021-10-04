import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout, SEO } from '../components';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query AboutContentQuery {
            mdx(fileAbsolutePath: { regex: "/about.mdx/" }) {
                frontmatter {
                    title
                }
                body
            }
        }
    `);

    const { mdx } = data;
    const { body } = mdx;
    const { frontmatter } = mdx;
    const { title } = frontmatter;

    return (
        <Layout>
            <SEO
                title="home"
                description="personal portfolio site for andrea finlay"
            />
            <h1>{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    );
};

export default IndexPage;
