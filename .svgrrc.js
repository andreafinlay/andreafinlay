module.exports = {
    typescript: true,
    svgProps: {
        width: '{size}',
        height: '{size}',
        viewBox: '0 0 24 24',
        'data-icon-name': '{title}',
        'aria-label': '{title}',
        role: 'presentation',
    },
    titleProp: false,
    icon: true,
    template: require('./src/assets/icons/template.tsx'),
    prettierConfig: '.prettierrc.js',
};
