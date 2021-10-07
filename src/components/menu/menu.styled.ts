import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled('div')`
    background-color: #87afff;
    padding: 16px;
    border: 5px solid black;
    border-top: none;
    border-right: none;
    position: absolute;
    top: 96px;
    right: 0;
    font-family: 'Inter';
`;

const Button = styled('button')`
    color: black;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    cursor: pointer;
    text-decoration: none;
    padding: 0;

    & > * {
        margin-right: 16px;
    }
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const LinksContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;

    *:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const Styled = {
    Wrapper,
    Button,
    StyledLink,
    LinksContainer,
};
