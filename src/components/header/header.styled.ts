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
`;

const Title = styled('h1')`
    display: flex;
    align-items: center;
    width: 234px;
    justify-content: space-between;
    margin: 0;
`;

const Logo = styled('div')`
    & img {
        border: 0;
    }

    ${breakpoint('lg')`
        display: none;
    `};
`;

const Button = styled('button')`
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    padding: 0;
    user-select: none;

    &:hover {
        background-color: transparent;
    }
`;

const Link = styled('button')`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.button};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;
    border: 3px solid;
    border-color: ${({ theme }) => theme.border};
    border-radius: 20%;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHover};
    }
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
        margin-left: 16px;
    }

    ${breakpoint('lg')`
        display: flex;
    `};
`;

const Burger = styled('button')`
    cursor: pointer;
    padding: 0.4rem 0.6rem;
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
    Link,
    LinkGroup,
    Burger,
    BurgerLineWrapper,
    BurgerLine,
    Logo,
    MobileGroup,
};
