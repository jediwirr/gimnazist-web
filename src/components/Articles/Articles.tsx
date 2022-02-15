import React, { FC } from "react";
import { IArticle } from "../../types/types";
import styles from "./Articles.module.css";

import { css } from "@emotion/css";

interface ArticlesProps {
    items: IArticle[];
    renderItem: (item: IArticle) => React.ReactNode;
    row?: boolean;
}

const Articles: FC<ArticlesProps> = ({items, renderItem, row}) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: row ? "row" : "column",
        }}>
            {items.map(renderItem)}
        </div>
    )
}

export default Articles;
