import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Send } from '../assets/icons';

interface HeaderProps {
    siteAuthor: string;
}

const StyledHeader = styled('header')`
    background: rgb(0, 255, 255);
    margin-bottom: 1.45rem;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
`;

const ContentWrapper = styled('div')`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
`;

const Title = styled('h1')`
    margin: 0;
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

const Header = ({ siteAuthor }: HeaderProps) => (
    <StyledHeader>
        <ContentWrapper>
            <Title>
                <StyledLink to="/">{siteAuthor}</StyledLink>
            </Title>
            <StyledLink to="contact">
                <Send size={36} />
            </StyledLink>
        </ContentWrapper>
    </StyledHeader>
);

export default Header;
