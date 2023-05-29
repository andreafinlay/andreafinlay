import { graphql, useStaticQuery } from 'gatsby';
// @ts-expect-error: Module not found
import { MdxEdge } from '../graphql';

export const useAllMdx = (): MdxEdge[] => {
    const data = useStaticQuery(graphql`
        query AllMdxQuery {
            allMdx(sort: { order: ASC, fields: frontmatter___id }) {
                edges {
                    node {
                        body
                        id
                        frontmatter {
                            slug
                            title
                            id
                            demo
                            github
                            image {
                                childImageSharp {
                                    gatsbyImageData(width: 800)
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.allMdx.edges;
};
