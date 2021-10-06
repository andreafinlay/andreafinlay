import React, {
    createContext,
    FC,
    ReactElement,
    useContext,
    useState,
} from 'react';

export interface MenuContextProps {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const defaultState = {
    isMenuOpen: false,
    openMenu: () => null,
    closeMenu: () => null,
};

export const MenuContext = createContext<MenuContextProps>(defaultState);

export const MenuContextProvider: FC = ({ children }): ReactElement => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = (): void => {
        setIsMenuOpen(true);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    return (
        <MenuContext.Provider
            value={{
                isMenuOpen,
                openMenu,
                closeMenu,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = (): MenuContextProps =>
    useContext<MenuContextProps>(MenuContext);
