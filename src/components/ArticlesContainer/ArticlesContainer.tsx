import React, { FC } from "react";
import { css } from "@emotion/react";

interface ArticlesContainerProps {
    children: React.ReactNode;
}

const ArticlesContainer: FC<ArticlesContainerProps> = ({children}) => {

    return (
        <div css={css`
            margin-bottom: 15px;
        `}>
            {children}
        </div>
    )
}

export default ArticlesContainer;
