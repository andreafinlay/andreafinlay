import { Link } from 'gatsby';
import React, { RefObject } from 'react';
import styled from 'styled-components';

import { Github, Send } from '../assets/icons';
import { scrollToElement } from '../helpers';

interface HeaderProps {
    siteAuthor: string;
    slideRefs: RefObject<HTMLDivElement>[];
}

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

export const Header: React.FC<HeaderProps> = ({ siteAuthor, slideRefs }) => {
    const handleContactScroll = () => {
        scrollToElement(slideRefs[2]);
    };

    const handleAboutScroll = () => {
        scrollToElement(slideRefs[0]);
    };

    return (
        <StyledHeader>
            <ContentWrapper>
                <Title>
                    {slideRefs && slideRefs.length ? (
                        <StyledButton onClick={handleAboutScroll}>
                            {siteAuthor}
                        </StyledButton>
                    ) : (
                        <StyledLink to="/">{siteAuthor}</StyledLink>
                    )}
                </Title>
                <LinksContainer>
                    <StyledButton
                        as="a"
                        href="https://github.com/andreafinlay"
                        target="blank"
                    >
                        <Github size={36} />
                    </StyledButton>
                    <StyledButton onClick={handleContactScroll}>
                        <Send size={36} />
                    </StyledButton>
                </LinksContainer>
            </ContentWrapper>
        </StyledHeader>
    );
};
