import { useEffect, useState } from 'react';

export const useMountEffect = (
    effect?: () => void,
): { hasMounted: boolean } => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        return effect?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { hasMounted };
};
