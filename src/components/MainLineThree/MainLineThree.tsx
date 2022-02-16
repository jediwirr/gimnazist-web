import React, { FC } from "react";
import Articles from "../Articles/Articles";
import Article from "../Article/Article";
import styles from "./MainLineThree.module.css";
import { IArticle } from "../../types/types";
import CategoryTitle from "../CategoyTitle/CategoryTitle";

interface MainLineThreeProps {
    articles: IArticle[];
}

const MainLineThree: FC<MainLineThreeProps> = ({articles}) => {

    return (
        <div className={styles.MainLineThree}>
            <div className={styles.lineThreeArticle}>
                <Articles items={articles} renderItem={item =>
                    {
                        if (item.position === "line-three-a") {
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
            <div className={styles.lineThreeArticle}>
                <Articles items={articles} renderItem={item =>
                    {
                        if (item.position === "line-three-b") {
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
        </div>
    )
}

export default MainLineThree;
