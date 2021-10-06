/* eslint-disable quotes */
import React from 'react';

import { useMenuContext, useSlidesContext } from '../../contexts';
import { scrollToElement } from '../../helpers';
import { Github, Linkedin, Send } from '../../assets/icons';
import { Styled } from './header.styled';

interface HeaderProps {
    siteAuthor: string;
}

export const Header: React.FC<HeaderProps> = ({ siteAuthor }) => {
    const { slideRefs, setShouldShowArrow } = useSlidesContext();
    const shouldNavigate = slideRefs && slideRefs.length;
    const { isMenuOpen, openMenu, closeMenu } = useMenuContext();

    const handleContactScroll = () => {
        setShouldShowArrow(false);
        scrollToElement(slideRefs[2]);
    };

    const handleAboutScroll = () => {
        setShouldShowArrow(true);
        scrollToElement(slideRefs[0]);
    };

    const handleOpenMenu = () => {
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    return (
        <Styled.Header>
            <Styled.ContentWrapper>
                <Styled.Title>
                    {shouldNavigate ? (
                        <Styled.Button onClick={handleAboutScroll}>
                            {siteAuthor}
                        </Styled.Button>
                    ) : (
                        <Styled.StyledLink to="/">
                            {siteAuthor}
                        </Styled.StyledLink>
                    )}
                </Styled.Title>
                <Styled.Burger onClick={handleOpenMenu}>
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
                <Styled.LinksContainer>
                    <Styled.Button
                        as="a"
                        href="https://github.com/andreafinlay"
                        target="blank"
                    >
                        <Github size={36} />
                    </Styled.Button>
                    <Styled.Button
                        as="a"
                        href="https://linkedin.com/in/andrea-finlay/"
                        target="blank"
                    >
                        <Linkedin size={36} />
                    </Styled.Button>
                    {!!shouldNavigate && (
                        <Styled.Button onClick={handleContactScroll}>
                            <Send size={36} />
                        </Styled.Button>
                    )}
                </Styled.LinksContainer>
            </Styled.ContentWrapper>
        </Styled.Header>
    );
};
