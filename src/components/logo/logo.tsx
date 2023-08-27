import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
// @ts-expect-error: Module not found
import { ExampleImageQuery } from '../../graphql';

export const Logo: FC = () => {
    const data: ExampleImageQuery = useStaticQuery(graphql`
        query ExampleImage {
            file(relativePath: { eq: "sparkles.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 56)
                }
            }
        }
    `);

    return (
        <GatsbyImage
            image={data?.file?.childImageSharp?.gatsbyImageData}
            alt="image"
        />
    );
};
