import React, { FC } from "react";
import { IArticle } from "../../types/types";
import Article from "../Article/Article";
import Articles from "../Articles/Articles";
import CategoryTitle from "../CategoyTitle/CategoryTitle";
import styles from "./Sidebar.module.css";

import { css } from "@emotion/react";

interface SidebarProps {
    articles: IArticle[];
}

const Sidebar: FC<SidebarProps> = ({articles}) => {

    return (
        <div className={styles.sidebar}>
            <CategoryTitle title="Что нового?" />
            <div css={css`
                max-height: 800px;
                overflow: scroll;
            `}>
                <Articles items={articles} renderItem={item =>
                    <Article key={item.id} item={item} titleSize="news" />
                } />
            </div>
        </div>
    )
}

export default Sidebar;
