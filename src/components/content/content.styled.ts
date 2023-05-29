import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Wrapper = styled('div')`
    position: fixed;
    bottom: 0;
    top: 96px;
    right: 2px;
    left: 2px;
    display: flex;
    flex-direction: column;

    ${breakpoint('lg')`
        right: 0;
        left: 0;
    `};
`;

const ScrollWrapper = styled('div')`
    height: 100%;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    ${breakpoint('lg')`
        flex-direction: column;
        margin: 0;
    `};
`;

export const Styled = {
    Wrapper,
    ScrollWrapper,
};
