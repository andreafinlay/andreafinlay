import React, { forwardRef, Ref } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ExternalLink, Github } from '../../assets/icons';
import { Button } from '..';
import { Styled } from './slide.styled';

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
                    <h1 style={{ marginTop: '8px' }}>{title}</h1>
                    {demo && (
                        <Button as="a" href={demo} title="View demo">
                            <ExternalLink size={24} />
                        </Button>
                    )}
                    {github && (
                        <Button as="a" href={github} title="Visit Github">
                            <Github size={24} />
                        </Button>
                    )}
                </Styled.Header>
                <MDXRenderer>{body}</MDXRenderer>
                {img && <GatsbyImage alt="image" image={img} />}
            </Styled.Slide>
        );
    },
);

Slide.displayName = 'Slide';
