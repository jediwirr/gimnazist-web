import React, { FC } from "react";
import { IArticle } from "../../types/types";
import Article from "../Article/Article";
import Articles from "../Articles/Articles";
import styles from "./Sidebar.module.css";

interface SidebarProps {
    articles: IArticle[];
}

const Sidebar: FC<SidebarProps> = ({articles}) => {

    return (
        <div className={styles.sidebar}>
            <Articles items={articles} renderItem={item =>
                <Article key={item.id} item={item} />
            } />
        </div>
    )
}

export default Sidebar;
