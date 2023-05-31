import { useState } from 'react';

interface UseLocalStorage {
    key: string;
    initialValue: string | number;
}

export const useLocalStorage = <T>({
    key,
    initialValue,
}: UseLocalStorage): {
    storedValue: T;
    setValue: (value: T) => void;
} => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return { storedValue, setValue };
};
