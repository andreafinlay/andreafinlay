import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Wrapper = styled('div')`
    position: absolute;
    bottom: 0;
    top: 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ArrowWrapper = styled('button')<{ shouldShowArrow }>`
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 4rem;
    margin-top: 6rem;
    background-color: #87afff;
    cursor: pointer;

    -moz-animation: bounce 3s infinite;
    -webkit-animation: bounce 3s infinite;
    animation: bounce 3s infinite;

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateX(0);
        }
        40% {
            transform: translateX(30px);
        }
        60% {
            transform: translateX(15px);
        }
    }

    opacity: ${({ shouldShowArrow }) => (shouldShowArrow ? 1 : 0)};

    ${breakpoint('md')`
        opacity: 0;
        display: none;
    `};

    transition: opacity 300ms ease-in-out;
`;

const ScrollWrapper = styled('div')`
    height: 100%;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ${breakpoint('md')`
        flex-direction: column;
        margin: 0;
    `};
`;

export const Styled = {
    Wrapper,
    ArrowWrapper,
    ScrollWrapper,
};
