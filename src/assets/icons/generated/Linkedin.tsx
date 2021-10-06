import React from 'react';
import { SvgIconProps } from '../icons.types';

const SvgLinkedin = ({
    size,
    title = 'Linkedin',
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
        className="linkedin_svg__feather linkedin_svg__feather-linkedin"
        data-icon-name={title}
        aria-label={title}
        role="presentation"
        {...props}
    >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx={4} cy={4} r={2} />
    </svg>
);

export default SvgLinkedin;
