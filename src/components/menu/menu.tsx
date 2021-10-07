import React from 'react';
import { Github, Linkedin, Send } from '../../assets/icons';

import { useMenuContext, useSlidesContext } from '../../contexts';
import { scrollToElement } from '../../helpers';
import { Portal } from '../portal';
import { Styled } from './menu.styled';

export const Menu: React.FC = () => {
    const { slideRefs } = useSlidesContext();
    const { isMenuOpen, closeMenu } = useMenuContext();
    const shouldNavigate = slideRefs && slideRefs.length;

    const handleContactScroll = () => {
        closeMenu();
        scrollToElement(slideRefs[2]);
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
                    {!!shouldNavigate && (
                        <Styled.Button onClick={handleContactScroll}>
                            <Send size={24} />
                            contact
                        </Styled.Button>
                    )}
                </Styled.LinksContainer>
            </Styled.Wrapper>
        </Portal>
    ) : null;
};
