export const breakpoints = {
    xxs: 320,
    xs: 375,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 2560,
};

export const breakpoint = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | string) =>
        `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
