import React, { FC } from "react";
import { IArticle } from "../../types/types";

import { css } from "@emotion/react";

interface ArticlesProps {
    items: IArticle[];
    renderItem: (item: IArticle) => React.ReactNode;
    row?: boolean;
}

const Articles: FC<ArticlesProps> = ({items, renderItem, row}) => {

    return (
        <div css={css`
            display: flex;
            flex-wrap: wrap;
            flex-direction: ${row ? "row" : "column"};
        `}>
            {items.map(renderItem)}
        </div>
    );
}

export default Articles;
