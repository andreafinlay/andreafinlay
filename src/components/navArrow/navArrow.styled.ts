import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Arrow = styled('button')<{
    shouldShowArrow: boolean;
    isArrowVisible: boolean;
    shouldAnimate: boolean;
}>`
    position: absolute;
    display: flex;
    align-items: center;
    left: 4rem;
    top: 1rem;
    border: 5px solid;

    &:hover {
        transform: none;
        filter: none;
    }

    animation: ${({ shouldShowArrow, shouldAnimate }) =>
        shouldShowArrow
            ? `fade-in 300ms forwards, ${shouldAnimate && 'bounce 3s infinite'}`
            : 'fade-out 300ms forwards'};
    -moz-animation: ${({ shouldShowArrow, shouldAnimate }) =>
        shouldShowArrow
            ? `fade-in 300ms forwards, ${shouldAnimate && 'bounce 3s infinite'}`
            : 'fade-out 300ms forwards'};
    -webkit-animation: ${({ shouldShowArrow, shouldAnimate }) =>
        shouldShowArrow
            ? `fade-in 300ms forwards, ${shouldAnimate && 'bounce 3s infinite'}`
            : 'fade-out 300ms forwards'};

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

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

    &,
    & * {
        display: ${({ isArrowVisible }) => (isArrowVisible ? 'flex' : 'none')};
    }

    ${breakpoint('lg')`
        opacity: 0;
        display: none;
    `};
`;

export const Styled = {
    Arrow,
};
