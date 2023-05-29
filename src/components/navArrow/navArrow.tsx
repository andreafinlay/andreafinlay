import React, { FC } from 'react';
import { ArrowRight } from '../../assets/icons';
import { Styled } from './navArrow.styled';

interface NavArrowProps {
    shouldShowArrow: boolean;
    isArrowVisible: boolean;
    shouldAnimate: boolean;
    onClick: () => void;
}

export const NavArrow: FC<NavArrowProps> = ({
    shouldShowArrow,
    isArrowVisible,
    shouldAnimate,
    onClick,
}) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <Styled.Arrow
            shouldShowArrow={shouldShowArrow}
            isArrowVisible={isArrowVisible}
            shouldAnimate={shouldAnimate}
            onClick={handleClick}
        >
            <ArrowRight size={36} />
        </Styled.Arrow>
    );
};
