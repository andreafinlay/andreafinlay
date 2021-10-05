import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { breakpoint } from '../helpers';

interface SlideProps {
    title: string;
    body: string;
    id: string;
}

const SyledSlide = styled('div')`
    height: 75%;
    width: 75%;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex: 0 0 auto;

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

export const Slide = forwardRef(
    ({ title, body, id }: SlideProps, ref: React.Ref<HTMLDivElement>) => {
        return (
            <SyledSlide id={id} ref={ref}>
                <h1>{title}</h1>
                <MDXRenderer>{body}</MDXRenderer>
            </SyledSlide>
        );
    },
);

Slide.displayName = 'Slide';
