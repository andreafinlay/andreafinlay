import React, {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';

import { breakpoint, scrollHorizontally } from '../../helpers';
import { ArrowRight } from '../../assets/icons';
import { useAllMdx } from '../../hooks';
import { Slide } from '../slide/slide';

interface ContentProps {
    setSlideRefs?: Dispatch<
        SetStateAction<MutableRefObject<HTMLDivElement>[] | undefined>
    >;
}

const Wrapper = styled('div')`
    position: absolute;
    bottom: 0;
    top: 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ArrowWrapper = styled('div')<{ shouldShowArrow }>`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 4rem;

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

    opacity: ${({ shouldShowArrow }) => (shouldShowArrow ? 1 : 0)};

    ${breakpoint('md')`
        opacity: 0;
    `};

    transition: opacity 300ms ease-in-out;
`;

const ScrollWrapper = styled('div')`
    height: 100%;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ${breakpoint('md')`
        flex-direction: column;
        margin: 0;
    `};
`;

export const Content: React.FC<ContentProps> = ({ setSlideRefs }) => {
    const edges = useAllMdx();
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

    useEffect(() => {
        setSlideRefs(slideRefs);
    }, []);

    return (
        <Wrapper>
            <ArrowWrapper shouldShowArrow={shouldShowArrow}>
                <ArrowRight size={36} />
            </ArrowWrapper>
            <ScrollWrapper ref={contentRef} onWheel={handleHorizontalScroll}>
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
