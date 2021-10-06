import React, {
    createContext,
    Dispatch,
    FC,
    MutableRefObject,
    ReactElement,
    RefObject,
    SetStateAction,
    useContext,
    useState,
} from 'react';

export interface SlidesContextProps {
    slideRefs: RefObject<HTMLDivElement>[];
    setSlideRefs: Dispatch<
        SetStateAction<MutableRefObject<HTMLDivElement>[] | undefined>
    >;
    shouldShowArrow: boolean;
    setShouldShowArrow: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    slideRefs: [],
    setSlideRefs: () => null,
    shouldShowArrow: true,
    setShouldShowArrow: () => true,
};

export const SlidesContext = createContext<SlidesContextProps>(defaultState);

export const SlidesContextProvider: FC = ({ children }): ReactElement => {
    const [slideRefs, setSlideRefs] = useState<RefObject<HTMLDivElement>[]>();
    const [shouldShowArrow, setShouldShowArrow] = useState(true);

    return (
        <SlidesContext.Provider
            value={{
                slideRefs,
                setSlideRefs,
                shouldShowArrow,
                setShouldShowArrow,
            }}
        >
            {children}
        </SlidesContext.Provider>
    );
};

export const useSlidesContext = (): SlidesContextProps =>
    useContext<SlidesContextProps>(SlidesContext);
