import styled from 'styled-components';

const Button = styled('button')`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.text};
    margin-left: 28px;
    transition: 100ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.toggleHover};
        color: ${({ theme }) => theme.body};
        filter: ${({ theme }) =>
            `drop-shadow(4px 4px 0 ${theme.buttonShadow})`};
        transform: translate(-4px, -4px);
    }
`;

export const Styled = {
    Button,
};
