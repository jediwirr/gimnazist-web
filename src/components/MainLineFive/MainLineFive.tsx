import React, { FC } from "react";
import Articles from "../Articles/Articles";
import Article from "../Article/Article";
import styles from "./MainLineFive.module.css";
import { IArticle } from "../../types/types";
import CategoryTitle from "../CategoyTitle/CategoryTitle";

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
                                    <CategoryTitle title={item.category} />
                                    <Article key={item.title} item={item} button />
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
                                    <CategoryTitle title={item.category} />
                                    <Article item={item} button />
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
