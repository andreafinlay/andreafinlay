import styled from 'styled-components';

const Button = styled('button')`
    color: #0049d6;
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    border: none;
    padding: 0;

    & :hover {
        background-color: transparent;
        text-decoration: underline;
    }
`;

export const Styled = {
    Button,
};
