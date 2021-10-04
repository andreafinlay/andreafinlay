import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ExampleImageQuery } from '../graphql';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
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

export default Image;
