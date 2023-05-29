import React, {
    createContext,
    Dispatch,
    FC,
    MutableRefObject,
    ReactElement,
    RefObject,
    SetStateAction,
    useCallback,
    useContext,
    useRef,
    useState,
} from 'react';
import { getOffset } from '../helpers';

export interface SlidesContextProps {
    slideRefs: MutableRefObject<MutableRefObject<HTMLDivElement>[]>;
    shouldShowArrow: boolean;
    showArrow: () => void;
    hideArrow: () => void;
    isArrowVisible: boolean;
    nextSlide: MutableRefObject<HTMLDivElement>;
    setNextSlide: Dispatch<SetStateAction<MutableRefObject<HTMLDivElement>>>;
    findNextSlide: () => RefObject<HTMLDivElement>;
}

const defaultState = {
    slideRefs: [] as unknown as MutableRefObject<
        MutableRefObject<HTMLDivElement>[]
    >,
    shouldShowArrow: true,
    showArrow: () => null,
    hideArrow: () => null,
    isArrowVisible: true,
    nextSlide: null,
    setNextSlide: () => null,
    findNextSlide: () => null,
};

export const SlidesContext = createContext<SlidesContextProps>(defaultState);

export const SlidesContextProvider: FC = ({ children }): ReactElement => {
    const slideRefs = useRef<MutableRefObject<HTMLDivElement>[]>([]);
    const [shouldShowArrow, setShouldShowArrow] = useState(true);
    const [isArrowVisible, setIsArrowVisible] = useState(true);

    const showArrow = useCallback(() => {
        setShouldShowArrow(true);

        setTimeout(() => {
            setIsArrowVisible(true);
        }, 300);
    }, [setShouldShowArrow]);

    const hideArrow = useCallback(() => {
        setShouldShowArrow(false);

        setTimeout(() => {
            setIsArrowVisible(false);
        }, 300);
    }, [setShouldShowArrow]);

    const [nextSlide, setNextSlide] = useState<
        MutableRefObject<HTMLDivElement>
    >(slideRefs?.current?.[0]);

    const findNextSlide = () =>
        slideRefs?.current?.find((slide, index) => {
            const { left } = getOffset(slide);
            const isInViewport = left - 38 > 0;

            if (isInViewport) {
                if (slideRefs?.current?.[index] === slideRefs?.current?.[0]) {
                    return slideRefs?.current?.[1];
                }

                if (
                    slideRefs?.current?.[index] ===
                    slideRefs?.current?.[slideRefs?.current?.length - 1]
                ) {
                    return slideRefs?.current?.[slideRefs?.current?.length - 1];
                }
            }

            return isInViewport;
        });

    return (
        <SlidesContext.Provider
            value={{
                slideRefs,
                shouldShowArrow,
                showArrow,
                hideArrow,
                isArrowVisible,
                nextSlide,
                setNextSlide,
                findNextSlide,
            }}
        >
            {children}
        </SlidesContext.Provider>
    );
};

export const useSlidesContext = (): SlidesContextProps =>
    useContext<SlidesContextProps>(SlidesContext);
