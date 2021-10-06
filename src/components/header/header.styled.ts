import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled('header')`
    background: #87afff;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    position: relative;
`;

const ContentWrapper = styled('div')`
    margin: 0 2rem;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
`;

const Title = styled('h1')`
    margin: 0;
`;

const StyledButton = styled('button')`
    color: black;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    padding: 0;
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const LinksContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
        margin-left: 8px;
    }
`;

export const Styled = {
    StyledHeader,
    ContentWrapper,
    Title,
    StyledButton,
    StyledLink,
    LinksContainer,
};
