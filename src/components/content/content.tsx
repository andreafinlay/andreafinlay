import React, { MutableRefObject, useRef } from 'react';

import { useSlidesContext } from '../../contexts';
import { useAllMdx, useMountEffect } from '../../hooks';
import { scrollHorizontally, scrollToElement } from '../../helpers';
import { ArrowRight } from '../../assets/icons';
import { Slide } from '../slide';
import { Styled } from './content.styled';

export const Content: React.FC = () => {
    const edges = useAllMdx();
    const { slideRefs, setSlideRefs, shouldShowArrow, setShouldShowArrow } =
        useSlidesContext();

    const contentRef = useRef<HTMLDivElement>();
    const slideRefsArr: Array<MutableRefObject<HTMLDivElement> | undefined> =
        [];

    const handleHorizontalScroll = (event) => {
        const { scrollPosition } = scrollHorizontally(event, contentRef);

        if (scrollPosition > 0) {
            setShouldShowArrow(false);
        } else {
            setShouldShowArrow(true);
        }
    };

    const handleScrollToNextSlide = () => {
        setShouldShowArrow(false);
        scrollToElement(slideRefs[1]);
    };

    useMountEffect(() => setSlideRefs(slideRefsArr));

    return (
        <Styled.Wrapper>
            <Styled.ArrowWrapper
                shouldShowArrow={shouldShowArrow}
                onClick={handleScrollToNextSlide}
            >
                <ArrowRight size={36} />
            </Styled.ArrowWrapper>
            <Styled.ScrollWrapper
                ref={contentRef}
                onWheel={handleHorizontalScroll}
            >
                {edges.map((edge) => {
                    const slideRef = useRef<HTMLDivElement>();
                    slideRefsArr.push(slideRef);

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
