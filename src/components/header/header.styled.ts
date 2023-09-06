import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const Header = styled('header')`
    background: ${({ theme }) => theme.accent};
    border-top: 5px solid;
    border-top-color: ${({ theme }) => theme.border};
    border-bottom: 5px solid;
    border-bottom-color: ${({ theme }) => theme.border};
    position: fixed;
    width: 100%;
`;

const ContentWrapper = styled('div')`
    margin: 0 2rem;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    ${breakpoint('lg')`
        margin: 0 1rem;
    `};
`;

const Title = styled('h1')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
`;

const Logo = styled('div')`
    & img {
        border: 0;
    }

    margin-right: 16px;

    ${breakpoint('lg')`
        margin-right: 8px;
    `};
`;

const Link = styled('button')`
    font-size: 3.8vw;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    border: none;
    user-select: none;

    &:hover {
        background-color: transparent;
        filter: none;
        transform: none;
        color: ${({ theme }) => theme.link};
    }

    ${breakpoint('lg')`
        font-size: 5vw;
    `};

    ${breakpoint('md')`
        display: none;
    `};
`;

const MobileLink = styled('button')`
    font-size: 7vw;

    display: none;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    border: none;
    user-select: none;

    &:hover {
        background-color: transparent;
        filter: none;
        transform: none;
        color: ${({ theme }) => theme.link};
    }

    ${breakpoint('md')`
        display: block;
    `};

    ${breakpoint('sm')`
        font-size: 10vw;
    `};
`;

const LinkGroup = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
        margin-left: 8px;
    }

    ${breakpoint('lg')`
        display: none;
    `};
`;

const MobileGroup = styled('div')`
    display: none;
    align-items: center;
    justify-content: center;

    & > * {
        margin-left: 8px;
    }

    ${breakpoint('lg')`
        display: flex;
    `};
`;

const Burger = styled('button')`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHover};
        filter: none;
        transform: none;
    }
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
    background-color: ${({ theme }) => theme.text};
    height: 0.25rem;
    transition: transform 300ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    border-radius: 3px;

    ${({ position, isOpen }) => {
        if (position === 'start') {
            if (isOpen) {
                return 'transform: rotate(90deg) translateX(0.625rem)';
            }

            return 'width: 1rem; transform-origin: right;';
        }

        if (position === 'center') {
            return 'width: 2rem; transition: none;';
        }

        if (position === 'end') {
            if (isOpen) {
                return 'transform: rotate(90deg) translateX(-0.625rem);';
            }

            return 'width: 1rem; transform-origin: left;';
        }
    }}
`;

export const Styled = {
    Header,
    ContentWrapper,
    Title,
    Link,
    MobileLink,
    LinkGroup,
    Burger,
    BurgerLineWrapper,
    BurgerLine,
    Logo,
    MobileGroup,
};
