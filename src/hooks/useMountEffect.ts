import { useEffect } from 'react';

export const useMountEffect = (effect: () => void): void =>
    useEffect(() => {
        return effect();
    }, []);
