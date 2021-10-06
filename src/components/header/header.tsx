import React, { RefObject } from 'react';

import { Github, Send } from '../../assets/icons';
import { scrollToElement } from '../../helpers';
import { Styled } from './header.styled';

interface HeaderProps {
    siteAuthor: string;
    slideRefs: RefObject<HTMLDivElement>[];
}

export const Header: React.FC<HeaderProps> = ({ siteAuthor, slideRefs }) => {
    const handleContactScroll = () => {
        scrollToElement(slideRefs[2]);
    };

    const handleAboutScroll = () => {
        scrollToElement(slideRefs[0]);
    };

    return (
        <Styled.StyledHeader>
            <Styled.ContentWrapper>
                <Styled.Title>
                    {slideRefs && slideRefs.length ? (
                        <Styled.StyledButton onClick={handleAboutScroll}>
                            {siteAuthor}
                        </Styled.StyledButton>
                    ) : (
                        <Styled.StyledLink to="/">
                            {siteAuthor}
                        </Styled.StyledLink>
                    )}
                </Styled.Title>
                <Styled.LinksContainer>
                    <Styled.StyledButton
                        as="a"
                        href="https://github.com/andreafinlay"
                        target="blank"
                    >
                        <Github size={36} />
                    </Styled.StyledButton>
                    <Styled.StyledButton onClick={handleContactScroll}>
                        <Send size={36} />
                    </Styled.StyledButton>
                </Styled.LinksContainer>
            </Styled.ContentWrapper>
        </Styled.StyledHeader>
    );
};
