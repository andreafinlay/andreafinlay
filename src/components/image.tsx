import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ExampleImageQuery } from '../graphql';

export const Image: React.FC = () => {
    const data: ExampleImageQuery = useStaticQuery(graphql`
        query ExampleImage {
            file(relativePath: { eq: "uwuhaul.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 200)
                }
            }
        }
    `);

    return (
        <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="image"
        />
    );
};
