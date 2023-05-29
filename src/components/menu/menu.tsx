import React, { FC } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Github, Linkedin, Send } from '../../assets/icons';
import { useMenuContext, useSlidesContext } from '../../contexts';
import { Portal } from '../portal';
import { Styled } from './menu.styled';

export const Menu: FC = () => {
    const { slideRefs, showArrow, setNextSlide } = useSlidesContext();
    const { isMenuOpen, closeMenu } = useMenuContext();

    const handleContactScroll = () => {
        showArrow();
        closeMenu();

        scrollTo('#contact');

        setTimeout(() => {
            if (window) {
                window.location.hash = '#contact';
            }
        }, 700);

        setNextSlide(slideRefs.current[slideRefs.current.length]);
    };

    return isMenuOpen ? (
        <Portal>
            <Styled.Wrapper>
                <Styled.LinksContainer>
                    <Styled.Button
                        as="a"
                        href="https://github.com/andreafinlay"
                        target="_blank"
                    >
                        <Github size={24} />
                        github
                    </Styled.Button>
                    <Styled.Button
                        as="a"
                        href="https://linkedin.com/in/andrea-finlay/"
                        target="_blank"
                    >
                        <Linkedin size={24} />
                        linkedin
                    </Styled.Button>
                    <Styled.Button as="a" onClick={handleContactScroll}>
                        <Send size={24} />
                        contact
                    </Styled.Button>
                </Styled.LinksContainer>
            </Styled.Wrapper>
        </Portal>
    ) : null;
};
