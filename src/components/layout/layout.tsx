import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { GlobalStyles } from '../../globalStyles';
import { lightTheme, darkTheme } from '../../theme';
import { MenuContextProvider, useThemeContext } from '../../contexts';
import { useSiteMetadata } from '../../hooks';
import { Header } from '../header';
import { Menu } from '../menu';
import { Styled } from './layout.styled';

interface LayoutProps {
    children: ReactNode;
}

const MDXComponents = {
    form: Styled.StyledForm,
    div: Styled.StyledDiv,
    span: Styled.StyledSpan,
    input: Styled.StyledInput,
    textarea: Styled.StyledTextArea,
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    const { author } = useSiteMetadata();
    const { theme, hasMounted } = useThemeContext();

    return hasMounted ? (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <MDXProvider components={MDXComponents}>
                <MenuContextProvider>
                    <Header siteAuthor={author} />
                    <Menu />
                </MenuContextProvider>
                <Styled.LayoutBody>
                    <main>{children}</main>
                </Styled.LayoutBody>
            </MDXProvider>
        </ThemeProvider>
    ) : null;
};
