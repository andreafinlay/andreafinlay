const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'andrea finlay - web developer',
        description: 'personal portfolio site for andrea finlay',
        author: 'andrea finlay',
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, '/src/images'),
            },
        },
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
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
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-pages',
                path: path.join(__dirname, '/src/content'),
            },
        },
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'NTR',
                    'Inter', // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
