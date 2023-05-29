import { WheelEvent, MutableRefObject } from 'react';

export const getNormalizedWheelValues = (event) => {
    const pixelStep = 10;
    const lineHeight = 40;
    const pageHeight = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;

    // Legacy.
    if ('detail' in event) sY = event.detail;
    else if ('wheelDelta' in event) sY = event.wheelDelta / -120;
    else if ('wheelDeltaY' in event) sY = event.wheelDeltaY / -120;

    if ('wheelDeltaX' in event) sX = event.wheelDeltaX / -120;

    // Side scrolling on FF with DOMMouseScroll.
    if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
    }

    // Calculate.
    pX = sX * pixelStep;
    pY = sY * pixelStep;

    if ('deltaY' in event) pY = event.deltaY;

    if ('deltaX' in event) pX = event.deltaX;

    if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode === 1) {
            pX *= lineHeight;
            pY *= lineHeight;
        } else {
            pX *= pageHeight;
            pY *= pageHeight;
        }
    }

    // Fallback if spin cannot be determined.
    if (pX && !sX) sX = pX < 1 ? -1 : 1;

    if (pY && !sY) sY = pY < 1 ? -1 : 1;

    // Return.
    return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
    };
};

export const scrollHorizontally = (
    event: WheelEvent,
    ref: MutableRefObject<HTMLDivElement>,
): { scrollPosition: number } => {
    let scrollPosition;

    const wheelValues = getNormalizedWheelValues(event);
    const x =
        wheelValues.pixelX !== 0 ? wheelValues.pixelX : wheelValues.pixelY;
    const delta = Math.min(Math.abs(x), 150);
    const direction = x > 0 ? 1 : -1;

    if (ref && ref.current) {
        ref.current.scrollLeft += delta * direction;
        scrollPosition = ref.current.scrollLeft;
    }

    return { scrollPosition };
};

export const scrollToElement = (ref: MutableRefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
};

export const getOffset = (ref: MutableRefObject<HTMLDivElement>) => {
    const rect = ref?.current?.getBoundingClientRect();
    let scrollLeft;
    let scrollTop;

    if (window && document) {
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    }

    return { top: rect?.top + scrollTop, left: rect?.left + scrollLeft };
};
