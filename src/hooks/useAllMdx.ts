import { graphql, useStaticQuery } from 'gatsby';
import { MdxEdge } from './../graphql';

export const useAllMdx = (): MdxEdge[] => {
    const data = useStaticQuery(graphql`
        query AllMdxQuery {
            allMdx(sort: { order: ASC, fields: frontmatter___id }) {
                edges {
                    node {
                        body
                        id
                        frontmatter {
                            title
                            id
                        }
                    }
                }
            }
        }
    `);

    return data.allMdx.edges;
};
