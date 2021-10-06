import React, { MutableRefObject, useRef, useState } from 'react';

import { useSlidesContext } from '../../contexts';
import { useAllMdx, useMountEffect } from '../../hooks';
import { scrollHorizontally } from '../../helpers';
import { ArrowRight } from '../../assets/icons';
import { Slide } from '../slide';
import { Styled } from './content.styled';

export const Content: React.FC = () => {
    const edges = useAllMdx();
    const { setSlideRefs } = useSlidesContext();
    const [shouldShowArrow, setShouldShowArrow] = useState(true);

    const contentRef = useRef<HTMLDivElement>();
    const slideRefs: Array<MutableRefObject<HTMLDivElement> | undefined> = [];

    const handleHorizontalScroll = (event) => {
        const { scrollPosition } = scrollHorizontally(event, contentRef);

        if (scrollPosition > 0) {
            setShouldShowArrow(false);
        } else {
            setShouldShowArrow(true);
        }
    };

    useMountEffect(() => setSlideRefs(slideRefs));

    return (
        <Styled.Wrapper>
            <Styled.ArrowWrapper shouldShowArrow={shouldShowArrow}>
                <ArrowRight size={36} />
            </Styled.ArrowWrapper>
            <Styled.ScrollWrapper
                ref={contentRef}
                onWheel={handleHorizontalScroll}
            >
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
            </Styled.ScrollWrapper>
        </Styled.Wrapper>
    );
};
