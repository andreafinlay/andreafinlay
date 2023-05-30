import React from 'react';
import { SvgIconProps } from '../icons.types';

const SvgCheckCircle = ({
    size,
    title = 'CheckCircle',
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
        className="check-circle_svg__feather check-circle_svg__feather-check-circle"
        data-icon-name={title}
        aria-label={title}
        role="presentation"
        {...props}
    >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
    </svg>
);

export default SvgCheckCircle;
