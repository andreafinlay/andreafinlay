import { graphql, useStaticQuery } from 'gatsby';
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
