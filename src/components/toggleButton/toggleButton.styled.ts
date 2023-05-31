import styled from 'styled-components';

const Button = styled('button')`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 25%;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.text};
    margin-left: 24px;

    &:hover {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }
`;

export const Styled = {
    Button,
};
