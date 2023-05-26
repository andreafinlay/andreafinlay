import React from 'react';
import { SvgIconProps } from '../icons.types';

const SvgBandcamp = ({
    size,
    title = 'Bandcamp',
    ...props
}: SvgIconProps): JSX.Element => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        data-icon-name={title}
        aria-label={title}
        role="presentation"
        {...props}
    >
        <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 1.5c4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25-4.549 0-8.25-3.701-8.25-8.25 0-4.549 3.701-8.25 8.25-8.25zM10.037 9l-3 6h6.926l3-6h-6.926zm.926 1.5h3.574l-1.5 3H9.463l1.5-3z" />
    </svg>
);

export default SvgBandcamp;
