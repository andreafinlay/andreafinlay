import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { getNormalizedWheelValues } from '../helpers';
import { Slide } from './slide';

const Wrapper = styled('div')`
    height: 100%;
    width: 100%;
    margin-top: 1.45rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;
`;

export const Content: React.FC = () => {
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

    return (
        <Wrapper ref={contentRef} onWheel={scrollHorizontally}>
            {edges.map((edge) => (
                <Slide
                    title={edge.node.frontmatter.title}
                    body={edge.node.body}
                    key={edge.node.id}
                />
            ))}
        </Wrapper>
    );
};
