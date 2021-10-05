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

interface ContentProps {
    setSlideRefs?: Dispatch<
        SetStateAction<MutableRefObject<HTMLDivElement>[] | undefined>
    >;
}

const Wrapper = styled('div')`
    height: 100%;
    width: 100%;
    margin-top: 1.45rem;
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
        <Wrapper ref={contentRef} onWheel={scrollHorizontally}>
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
        </Wrapper>
    );
};
