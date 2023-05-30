import React from 'react';
import { SvgIconProps } from '../icons.types';

const SvgExternalLink = ({
    size,
    title = 'ExternalLink',
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
        className="external-link_svg__feather external-link_svg__feather-external-link"
        data-icon-name={title}
        aria-label={title}
        role="presentation"
        {...props}
    >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
);

export default SvgExternalLink;
