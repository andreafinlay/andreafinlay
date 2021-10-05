import React, {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useRef,
} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { getNormalizedWheelValues, breakpoint } from '../helpers';
import { Slide } from './slide';
import { ArrowRight } from '../assets/icons';

interface ContentProps {
    setSlideRefs?: Dispatch<
        SetStateAction<MutableRefObject<HTMLDivElement>[] | undefined>
    >;
}

const Wrapper = styled('div')`
    height: 100%;
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ArrowWrapper = styled('div')`
    -moz-animation: bounce 3s infinite;
    -webkit-animation: bounce 3s infinite;
    animation: bounce 3s infinite;

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateX(0);
        }
        40% {
            transform: translateX(30px);
        }
        60% {
            transform: translateX(15px);
        }
    }

    ${breakpoint('md')`
        display: none;
    `};
`;

const ScrollWrapper = styled('div')`
    height: 100%;
    margin-top: -3rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ${breakpoint('md')`
        flex-direction: column;
    `};
`;

export const Content: React.FC<ContentProps> = ({ setSlideRefs }) => {
    const data = useStaticQuery(graphql`
        query AboutContentQuery {
            allMdx(sort: { order: ASC, fields: frontmatter___id }) {
                edges {
                    node {
                        body
                        id
                        frontmatter {
                            title
                            id
                        }
                    }
                }
            }
        }
    `);

    const { allMdx } = data;
    const { edges } = allMdx;

    const contentRef = useRef<HTMLDivElement>();
    const slideRefs: Array<MutableRefObject<HTMLDivElement> | undefined> = [];

    const scrollHorizontally = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const wheelValues = getNormalizedWheelValues(event);
        const x =
            wheelValues.pixelX !== 0 ? wheelValues.pixelX : wheelValues.pixelY;
        const delta = Math.min(Math.abs(x), 150);
        const direction = x > 0 ? 1 : -1;

        if (contentRef && contentRef.current) {
            contentRef.current.scrollLeft += delta * direction;
        }
    };

    useEffect(() => {
        setSlideRefs(slideRefs);
    }, []);

    return (
        <Wrapper>
            <ArrowWrapper>
                <ArrowRight size={36} />
            </ArrowWrapper>
            <ScrollWrapper ref={contentRef} onWheel={scrollHorizontally}>
                {edges.map((edge) => {
                    const slideRef = useRef<HTMLDivElement>();
                    slideRefs.push(slideRef);
                    return (
                        <Slide
                            title={edge.node.frontmatter.title}
                            body={edge.node.body}
                            key={edge.node.id}
                            id={edge.node.frontmatter.title}
                            ref={slideRef}
                        />
                    );
                })}
            </ScrollWrapper>
        </Wrapper>
    );
};
