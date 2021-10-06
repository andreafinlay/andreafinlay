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
}

const defaultState = {
    slideRefs: [],
    setSlideRefs: () => null,
};

export const SlidesContext = createContext<SlidesContextProps>(defaultState);

export const SlidesContextProvider: FC = ({ children }): ReactElement => {
    const [slideRefs, setSlideRefs] = useState<RefObject<HTMLDivElement>[]>();

    return (
        <SlidesContext.Provider value={{ slideRefs, setSlideRefs }}>
            {children}
        </SlidesContext.Provider>
    );
};

export const useSlidesContext = (): SlidesContextProps =>
    useContext<SlidesContextProps>(SlidesContext);
