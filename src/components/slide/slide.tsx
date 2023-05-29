import React, { forwardRef, Ref } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Styled } from './slide.styled';
import { ArrowRight, Github } from '../../assets/icons';

interface SlideProps {
    title: string;
    body: string;
    id: string;
    image?: IGatsbyImageData;
    demo?: string;
    github?: string;
}

export const Slide = forwardRef(
    (
        { title, body, id, image, demo, github }: SlideProps,
        ref: Ref<HTMLDivElement>,
    ) => {
        const img = getImage(image);

        return (
            <Styled.Slide id={id} ref={ref}>
                <Styled.Header>
                    <h1>{title}</h1>
                    {demo && (
                        <Styled.Link as="a" href={demo}>
                            Live
                            <ArrowRight size={24} />
                        </Styled.Link>
                    )}
                    {github && (
                        <Styled.Link as="a" href={github}>
                            <Github size={24} />
                        </Styled.Link>
                    )}
                </Styled.Header>
                <MDXRenderer>{body}</MDXRenderer>
                {img && <GatsbyImage alt="image" image={img} />}
            </Styled.Slide>
        );
    },
);

Slide.displayName = 'Slide';
