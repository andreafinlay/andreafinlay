import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface SlideProps {
    title: string;
    body: string;
}

const SyledSlide = styled('div')`
    height: 75%;
    width: 75%;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex: 0 0 auto;

    &:not(:first-child) {
        margin-left: 8px;
    }
`;

export const Slide: React.FC<SlideProps> = ({ title, body }) => {
    return (
        <SyledSlide>
            <h1>{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
        </SyledSlide>
    );
};
