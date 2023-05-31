/* eslint-disable quotes */
import React, { FC } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useMenuContext, useSlidesContext } from '../../contexts';
import { Github, Linkedin, Send } from '../../assets/icons';
import { Styled } from './header.styled';
import { Logo } from '../logo';
import { ToggleButton } from '../toggleButton';

interface HeaderProps {
    siteAuthor: string;
}

export const Header: FC<HeaderProps> = ({ siteAuthor }) => {
    const { slideRefs, showArrow, hideArrow, setNextSlide } =
        useSlidesContext();
    const { isMenuOpen, toggleMenu, closeMenu } = useMenuContext();

    const handleContactScroll = () => {
        showArrow();

        scrollTo('#contact');

        setTimeout(() => {
            if (window) {
                window.location.hash = '#contact';
            }
        }, 700);

        setNextSlide(slideRefs.current[slideRefs.current.length]);
    };

    const handleAboutScroll = () => {
        hideArrow();
        closeMenu();

        scrollTo('#about');

        setTimeout(() => {
            if (window) {
                window.location.hash = '#about';
            }
        }, 700);

        setNextSlide(slideRefs.current[1]);
    };

    return (
        <Styled.Header>
            <Styled.ContentWrapper>
                <Styled.Title>
                    <Styled.Logo>
                        <Logo />
                    </Styled.Logo>
                    <Styled.Button onClick={handleAboutScroll}>
                        {siteAuthor}
                    </Styled.Button>
                </Styled.Title>
                <Styled.Burger onClick={toggleMenu}>
                    <Styled.BurgerLineWrapper isOpen={isMenuOpen}>
                        <Styled.BurgerLine
                            position="start"
                            isOpen={isMenuOpen}
                        />
                        <Styled.BurgerLine
                            position="center"
                            isOpen={isMenuOpen}
                        />
                        <Styled.BurgerLine position="end" isOpen={isMenuOpen} />
                    </Styled.BurgerLineWrapper>
                </Styled.Burger>
                <Styled.LinkGroup>
                    <Styled.Link
                        as="a"
                        href="https://github.com/andreafinlay"
                        target="_blank"
                    >
                        <Github size={36} />
                    </Styled.Link>
                    <Styled.Link
                        as="a"
                        href="https://linkedin.com/in/andrea-finlay/"
                        target="_blank"
                    >
                        <Linkedin size={36} />
                    </Styled.Link>
                    <Styled.Link onClick={handleContactScroll}>
                        <Send size={36} />
                    </Styled.Link>
                    <ToggleButton />
                </Styled.LinkGroup>
            </Styled.ContentWrapper>
        </Styled.Header>
    );
};
