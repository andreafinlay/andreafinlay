import { graphql, useStaticQuery } from 'gatsby';
// @ts-expect-error: Module not found
import { SiteSiteMetadata } from './../graphql';

export const useSiteMetadata = (): SiteSiteMetadata => {
    const data = useStaticQuery(
        graphql`
            query SiteMeta {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    return data.site.siteMetadata;
};
