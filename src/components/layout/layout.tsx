import React, { FC, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { GlobalStyles } from '../../globalStyles';
import { MenuContextProvider } from '../../contexts';
import { useSiteMetadata } from '../../hooks';
import { Header } from '../header';
import { Styled } from './layout.styled';
import { Menu } from '../menu';

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

    return (
        <>
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
        </>
    );
};
