import React, { FC, useEffect, useRef, WheelEvent, createRef } from 'react';
import { useSlidesContext } from '../../contexts';
import { useAllMdx, useMountEffect } from '../../hooks';
import { scrollHorizontally, scrollToElement } from '../../helpers';
import { NavArrow } from '../navArrow';
import { Slide } from '../slide';
import { Styled } from './content.styled';

export const Content: FC = () => {
    const edges = useAllMdx();

    const contentRef = useRef<HTMLDivElement>();

    const {
        slideRefs,
        nextSlide,
        setNextSlide,
        findNextSlide,
        shouldShowArrow,
        isArrowVisible,
        showArrow,
        hideArrow,
    } = useSlidesContext();

    slideRefs.current = edges.map(
        (_, index) => slideRefs?.current?.[index] || createRef(),
    );

    const handleScroll = (event: WheelEvent) => {
        scrollHorizontally(event, contentRef);

        const getCurrentSlide = () => {
            if (
                findNextSlide() ===
                    slideRefs?.current?.[slideRefs?.current?.length - 1] ||
                nextSlide === slideRefs?.current?.[slideRefs?.current?.length]
            ) {
                return slideRefs?.current?.[slideRefs?.current?.length - 2];
            } else {
                return slideRefs?.current?.[
                    slideRefs?.current?.indexOf(findNextSlide()) - 1
                ];
            }
        };

        window &&
            window.history.pushState(
                { title: `#${getCurrentSlide()?.current?.id}` },
                null,
                `#${getCurrentSlide()?.current?.id}`,
            );

        setNextSlide(findNextSlide());
    };

    const handleScrollToNextSlide = () => {
        scrollToElement(nextSlide);

        window &&
            window.history.pushState(null, null, `#${nextSlide.current.id}`);

        setTimeout(() => {
            setNextSlide(
                (prevSlide) =>
                    slideRefs?.current?.[
                        slideRefs?.current?.indexOf(prevSlide) + 1
                    ],
            );
        }, 300);
    };

    useMountEffect(() => {
        setNextSlide(findNextSlide());
    });

    useEffect(() => {
        const listenToHashChange = () => {
            if (window && window.location.hash.includes('#contact')) {
                hideArrow();
            } else {
                showArrow();
            }
        };

        window && window.addEventListener('popstate', listenToHashChange);

        return () => {
            window &&
                window.removeEventListener('popstate', listenToHashChange);
        };
    }, [hideArrow, showArrow]);

    useEffect(() => {
        if (
            findNextSlide() ===
                slideRefs?.current?.[slideRefs?.current?.length - 1] ||
            nextSlide === slideRefs?.current?.[slideRefs?.current?.length]
        ) {
            hideArrow();
        } else {
            showArrow();
        }
    }, [nextSlide, slideRefs, findNextSlide, hideArrow, showArrow]);

    return (
        <Styled.Wrapper>
            <NavArrow
                shouldShowArrow={shouldShowArrow}
                isArrowVisible={isArrowVisible}
                shouldAnimate={nextSlide === slideRefs?.current?.[1]}
                onClick={handleScrollToNextSlide}
            />
            <Styled.ScrollWrapper ref={contentRef} onWheel={handleScroll}>
                {edges.map((edge, index) => (
                    <Slide
                        title={edge.node.frontmatter.title}
                        body={edge.node.body}
                        key={edge.node.id}
                        id={edge.node.frontmatter.slug}
                        image={
                            edge.node.frontmatter.image?.childImageSharp
                                ?.gatsbyImageData
                        }
                        demo={edge.node.frontmatter.demo}
                        github={edge.node.frontmatter.github}
                        ref={slideRefs?.current?.[index]}
                    />
                ))}
            </Styled.ScrollWrapper>
        </Styled.Wrapper>
    );
};
