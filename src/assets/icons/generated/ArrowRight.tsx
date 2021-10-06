import React from 'react';
import { SvgIconProps } from '../icons.types';

const SvgArrowRight = ({
    size,
    title = 'ArrowRight',
    ...props
}: SvgIconProps): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
        data-icon-name={title}
        aria-label={title}
        role="presentation"
        {...props}
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default SvgArrowRight;
