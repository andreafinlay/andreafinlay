import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    siteTitle: string;
}

const StyledHeader = styled('header')`
    background: rgb(0, 255, 255);
    margin-bottom: 1.45rem;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
`;

const Header = ({ siteTitle }: HeaderProps) => (
    <StyledHeader>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </StyledHeader>
);

export default Header;
