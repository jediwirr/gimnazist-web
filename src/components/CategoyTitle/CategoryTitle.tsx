import React, { FC } from "react";
import styled from "@emotion/styled";

interface CategoryTitleProps {
    title: string;
}

const StyledText = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    color: #fff;
`;

const StyledBlock = styled.div`
    background-color: #727272;
    border-radius: 5px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    margin-top: 3px;
    cursor: pointer;

    &:active {
        opacity: .5;
    }
`;

const CategoryTitle: FC<CategoryTitleProps> = ({title}) => {

    return (
        <StyledBlock>
            <StyledText>
                {title}
            </StyledText>
        </StyledBlock>
    )
}

export default CategoryTitle;
