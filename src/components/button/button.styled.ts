import styled from 'styled-components';

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
    transition: 100ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.buttonHover};
        filter: ${({ theme }) =>
            `drop-shadow(4px 4px 0 ${theme.buttonShadow})`};
        transform: translate(-4px, -4px);
    }
`;

export const Styled = {
    Link,
};
