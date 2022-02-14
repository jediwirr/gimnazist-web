import React, { FC } from "react";
import Articles from "../Articles/Articles";
import Article from "../Article/Article";
import styles from "./MainLineFive.module.css";
import { IArticle } from "../../types/types";

interface MainLineFiveProps {
    articles: IArticle[];
}

const MainLineFive: FC<MainLineFiveProps> = ({articles}) => {

    return (
        <div className={styles.MainLineFive}>
            <div className={styles.lineFiveArticle}>
                <Articles items={articles} renderItem={item =>
                    {
                        if (item.position === "line-five-a") {
                            return (
                                <div key={item.id}>
                                    <span key={item.category} className="category-title">{item.category}</span>
                                    <Article key={item.title} item={item} />
                                </div>
                            )
                        }
                    }
                } />
            </div>
            <div className={styles.lineFiveArticle}>
                <Articles items={articles} renderItem={item =>
                    {
                        if (item.position === "line-five-b") {
                            return (
                                <div key={item.id}>
                                    <span className="category-title">{item.category}</span>
                                    <Article item={item} />
                                </div>
                            )
                        }
                    }
                } />
            </div>
        </div>
    )
}

export default MainLineFive;
