import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { breakpoint } from '../helpers';

interface SlideProps {
    title: string;
    body: string;
    id: string;
}

const SyledSlide = styled('div')`
    height: 80%;
    width: 75%;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    flex: 0 0 auto;
    text-align: center;

    ${breakpoint('md')`
        width: 100%;
        border-right: none;
        border-left: none;
        border-top: none;
        height: auto;
    `};

    &:not(:first-child) {
        margin-left: 8px;

        ${breakpoint('md')`
            margin-left: 0px;
        `};
    }
`;

const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
`;

const MDXComponents = {
    form: StyledForm,
};

export const Slide = forwardRef(
    ({ title, body, id }: SlideProps, ref: Ref<HTMLDivElement>) => {
        return (
            <SyledSlide id={id} ref={ref}>
                <h1>{title}</h1>
                <MDXProvider components={MDXComponents}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </SyledSlide>
        );
    },
);

Slide.displayName = 'Slide';
