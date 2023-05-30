import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Slide = styled('div')`
    height: 90%;
    width: 60%;
    border: 5px solid black;
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

const Link = styled('button')`
    color: black;
    background-color: #fb96c0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;
    border: 3px solid black;
    border-radius: 20%;
    margin-top: -8px;

    &:hover {
        background-color: #f965a3;
    }
`;

export const Styled = {
    Slide,
    Header,
    Link,
};
