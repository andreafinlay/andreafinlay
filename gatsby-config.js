const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'andrea finlay | web developer',
        description: 'personal portfolio site for andrea finlay',
        author: 'andrea finlay',
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
                    'gatsby-remark-static-images',
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
    ],
};
