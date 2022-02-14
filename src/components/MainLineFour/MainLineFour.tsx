import React, { FC } from "react";
import Articles from "../Articles/Articles";
import Article from "../Article/Article";
import styles from "./MainLineFour.module.css";
import { IArticle } from "../../types/types";

interface MainLineFourProps {
    articles: IArticle[];
}

const MainLineFour: FC<MainLineFourProps> = ({articles}) => {

    return (
        <div className={styles.MainLineFour}>
            <div className={styles.lineFourArticle}>
                <Articles items={articles} renderItem={item =>
                    {
                        if (item.position === "line-four") {
                            return (
                                <div key={item.id}>
                                    <span key={item.category} className="category-title">{item.category}</span>
                                    <Article key={item.title} item={item} row />
                                </div>
                            )
                        }
                    }
                } />
            </div>
        </div>
    )
}

export default MainLineFour;
