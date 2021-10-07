import React, { forwardRef, Ref } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import { Styled } from './slide.styled';

interface SlideProps {
    title: string;
    body: string;
    id: string;
}

const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    *:nth-child(2) {
        margin-bottom: 8px;
    }
`;

const StyledDiv = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    margin-bottom: 0;
`;

const MDXComponents = {
    form: StyledForm,
    div: StyledDiv,
};

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
