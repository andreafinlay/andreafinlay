import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Header = styled('header')`
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

const Button = styled('button')`
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

    ${breakpoint('md')`
        display: none;
    `};
`;

const Burger = styled('button')`
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    display: none;

    ${breakpoint('md')`
        display: block;
    `};
`;

const BurgerLineWrapper = styled('div')<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.5rem;
    transition: transform 300ms ease;

    ${({ isOpen }) => isOpen && 'transform: rotate(-45deg);'}
`;

const BurgerLine = styled('div')<{
    position: 'start' | 'center' | 'end';
    isOpen: boolean;
}>`
    background-color: black;
    height: 0.25rem;
    transition: transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57);

    ${({ position, isOpen }) => {
        if (position === 'start') {
            if (isOpen) {
                return 'transform: rotate(90deg) translateX(0.625rem)';
            }

            return 'width: 0.75rem; transform-origin: right;';
        }

        if (position === 'center') {
            return 'width: 1.25rem; transition: none;';
        }

        if (position === 'end') {
            if (isOpen) {
                return 'transform: rotate(90deg) translateX(-0.625rem);';
            }

            return 'width: 0.75rem; transform-origin: left;';
        }
    }}
`;

export const Styled = {
    Header,
    ContentWrapper,
    Title,
    Button,
    StyledLink,
    LinksContainer,
    Burger,
    BurgerLineWrapper,
    BurgerLine,
};