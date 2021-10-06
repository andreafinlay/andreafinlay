import React, { forwardRef, Ref } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Styled } from './slide.styled';

interface SlideProps {
    title: string;
    body: string;
    id: string;
}

const MDXComponents = {};

export const Slide = forwardRef(
    ({ title, body, id }: SlideProps, ref: Ref<HTMLDivElement>) => {
        return (
            <Styled.Slide id={id} ref={ref}>
                <h1>{title}</h1>
                <MDXProvider components={MDXComponents}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </Styled.Slide>
        );
    },
);

Slide.displayName = 'Slide';
