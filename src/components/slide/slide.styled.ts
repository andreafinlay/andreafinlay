import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Slide = styled('div')`
    height: 90%;
    width: 60%;
    border: 5px solid;
    border-color: ${({ theme }) => theme.border};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
    flex: 0 0 auto;
    text-align: left;

    ${breakpoint('lg')`
        width: 100%;
        border-right: none;
        border-left: none;
        border-top: none;
        height: auto;
    `};

    &:not(:first-child) {
        margin-left: 8px;

        ${breakpoint('lg')`
            margin-left: 0px;
        `};
    }

    & > :last-child {
        margin-top: auto;
        margin-bottom: 0;
        align-self: center;
    }
`;

const Header = styled('div')`
    display: flex;
    align-items: flex-start;

    & > * {
        margin-right: 12px;
    }
`;

export const Styled = {
    Slide,
    Header,
};
