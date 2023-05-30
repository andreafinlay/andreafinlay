import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot =
    typeof document !== 'undefined' ? document.getElementById('portal') : null;

export const Portal: FC = ({ children }) => {
    const container =
        typeof document !== 'undefined' ? document.createElement('div') : null;

    useEffect(() => {
        portalRoot.appendChild(container);

        return () => {
            portalRoot.removeChild(container);
        };
    }, [container]);

    return portalRoot ? ReactDOM.createPortal(children, container) : null;
};
