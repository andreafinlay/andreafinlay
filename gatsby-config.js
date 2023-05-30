const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});
const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://andreafinlay.com',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
    siteMetadata: {
        title: 'andrea finlay | web developer',
        description: 'personal portfolio site for andrea finlay',
        author: 'andrea finlay',
        siteUrl: siteUrl,
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, '/src/images'),
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-pages',
                path: path.join(__dirname, '/src/content'),
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 600,
                            height: 500,
                            wrapperStyle: {
                                position: 'absolute',
                                width: '100px',
                                height: '100px',
                            }
                        }
                    },
                ],
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'andrea finlay - web developer',
                short_name: 'andrea finlay',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#00FFFF',
                display: 'browser',
                icon: 'src/images/sparkles.png',
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'NTR',
                    'Inter:300,400,400i,500,600,700,800,900',
                ],
                display: 'swap',
            },
        },
        'gatsby-plugin-portal',
        'gatsby-plugin-smoothscroll',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                sitemap: 'https://andreafinlay.com/sitemap-index.xml',
                resolveEnv: () => NETLIFY_ENV,
                env: {
                        production: {
                        policy: [{ userAgent: '*' }]
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null
                    },
                },
            },
        },
    ],
};
