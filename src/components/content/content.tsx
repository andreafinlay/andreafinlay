import React, {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';

import { useAllMdx } from '../../hooks';
import { scrollHorizontally } from '../../helpers';
import { ArrowRight } from '../../assets/icons';
import { Slide } from '../slide';
import { Styled } from './content.styled';

interface ContentProps {
    setSlideRefs?: Dispatch<
        SetStateAction<MutableRefObject<HTMLDivElement>[] | undefined>
    >;
}

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
