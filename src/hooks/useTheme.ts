import { useLocalStorage } from './useLocalStorage';
import { ThemeMode } from '../theme';
import { useMountEffect } from './useMountEffect';

export const useTheme = (): {
    theme: ThemeMode;
    toggleTheme: () => void;
    hasMounted: boolean;
} => {
    const { storedValue: localTheme, setValue: setLocalTheme } =
        useLocalStorage<ThemeMode>({ key: 'mode', initialValue: 'light' });

    const toggleTheme = () => {
        localTheme === 'light' ? setLocalTheme('dark') : setLocalTheme('light');
    };

    const { hasMounted } = useMountEffect();

    return { theme: localTheme, toggleTheme, hasMounted };
};
