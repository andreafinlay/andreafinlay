import React from 'react';
import { SvgIconProps } from '../icons.types';

const SvgSend = ({
    size,
    title = 'Send',
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
        className="send_svg__feather send_svg__feather-send"
        data-icon-name={title}
        aria-label={title}
        role="presentation"
        {...props}
    >
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
);

export default SvgSend;
