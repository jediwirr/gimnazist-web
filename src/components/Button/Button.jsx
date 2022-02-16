import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

function Text({children, primary}) {
    const theme = useTheme();

    return (
        <span css={css`
            font-size: 1rem;
            color: ${primary ? theme.textColor.primary : theme.textColor.secondary};
        `}>
            {children}
        </span>
    )
}

const StyledButton = styled.button`
    background: none;
    border: none;
    width: 100%;
    display: flex;
    justify-content: start;
    cursor: pointer;
`;

export function Button({ children }) {
    return (
        <StyledButton primary>
            <Text primary>{children}</Text>
        </StyledButton>
    );
}