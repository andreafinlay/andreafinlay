import React from 'react';
import Helmet from 'react-helmet';

import { useSiteMetadata } from '../../hooks';

type MetaProps = JSX.IntrinsicElements['meta'];

interface SEOProps {
    pageDescription: string;
    lang?: string;
    meta?: MetaProps[];
    pageTitle: string;
}

export const SEO: React.FC<SEOProps> = ({
    pageDescription,
    lang = 'en',
    meta = [],
    pageTitle,
}) => {
    const { title, description, author } = useSiteMetadata();

    const metaDescription = pageDescription || description!;
    const metaTitle = pageTitle || title!;

    const constantMeta: MetaProps[] = [
        {
            name: 'description',
            content: metaDescription,
        },
        {
            property: 'og:title',
            content: metaTitle,
        },
        {
            property: 'og:description',
            content: metaDescription,
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary',
        },
        {
            name: 'twitter:creator',
            content: author!,
        },
        {
            name: 'twitter:title',
            content: metaTitle,
        },
        {
            name: 'twitter:description',
            content: metaDescription,
        },
    ];

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            titleTemplate={`%s | ${author}`}
            meta={constantMeta.concat(meta)}
        >
            <script src="https://unpkg.com/@botpoison/browser" async></script>
        </Helmet>
    );
};
