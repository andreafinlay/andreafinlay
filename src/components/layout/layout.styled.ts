import styled from 'styled-components';
import { breakpoint } from '../../helpers';

const LayoutBody = styled('div')`
    box-sizing: border-box;
    padding-top: 96px;
    font-family: 'Inter';
`;

const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    *:nth-child(2) {
        margin-bottom: 8px;
    }

    & > button {
        padding-right: 24px;
        padding-left: 24px;
    }

    ${breakpoint('lg')`
        align-self: center;
    `};
`;

const StyledDiv = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0;
`;

const StyledSpan = styled('span')`
    position: none;
`;

const StyledInput = styled('input')`
    width: 100%;
`;

const StyledTextArea = styled('textarea')`
    height: 100%;
    width: 100%;

    ${breakpoint('lg')`
        height: 300px;
    `};
`;

export const Styled = {
    LayoutBody,
    StyledForm,
    StyledDiv,
    StyledSpan,
    StyledInput,
    StyledTextArea,
};
