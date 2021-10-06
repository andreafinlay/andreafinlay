import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Slide = styled('div')`
    height: 80%;
    width: 75%;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    flex: 0 0 auto;
    text-align: center;

    ${breakpoint('md')`
        width: 100%;
        border-right: none;
        border-left: none;
        border-top: none;
        height: auto;
    `};

    &:not(:first-child) {
        margin-left: 8px;

        ${breakpoint('md')`
            margin-left: 0px;
        `};
    }
`;

export const Styled = {
    Slide,
};
