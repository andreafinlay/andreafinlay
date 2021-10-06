import React from 'react';

import { useSlidesContext } from '../../contexts';
import { scrollToElement } from '../../helpers';
import { Github, Send } from '../../assets/icons';
import { Styled } from './header.styled';

interface HeaderProps {
    siteAuthor: string;
}

export const Header: React.FC<HeaderProps> = ({ siteAuthor }) => {
    const { slideRefs, setShouldShowArrow } = useSlidesContext();
    const shouldNavigate = slideRefs && slideRefs.length;

    const handleContactScroll = () => {
        setShouldShowArrow(false);
        scrollToElement(slideRefs[2]);
    };

    const handleAboutScroll = () => {
        setShouldShowArrow(true);
        scrollToElement(slideRefs[0]);
    };

    return (
        <Styled.StyledHeader>
            <Styled.ContentWrapper>
                <Styled.Title>
                    {shouldNavigate ? (
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
                    {!!shouldNavigate && (
                        <Styled.StyledButton onClick={handleContactScroll}>
                            <Send size={36} />
                        </Styled.StyledButton>
                    )}
                </Styled.LinksContainer>
            </Styled.ContentWrapper>
        </Styled.StyledHeader>
    );
};
