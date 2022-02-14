import React, { FC, useRef } from "react";
import Articles from "../Articles/Articles";
import Article from "../Article/Article";
import styles from "./MainLineTwo.module.css";
import { IArticle } from "../../types/types";

interface MainLineTwoProps {
    articles: IArticle[];
}

const MainLineTwo: FC<MainLineTwoProps> = ({articles}) => {
    console.log(articles);

    return (
        <div className={styles.MainLineTwo__wrapper}>
            <div className={styles.MainLineTwo} style={{
                width: 220 * articles.length
            }}>
                <Articles items={articles} row renderItem={item =>
                    <div key={item.id} className={styles.lineTwoArticle}>
                        <span key={item.category} className="category-title">{item.category}</span>
                        <Article key={item.title} item={item} titleSize="small" hideDesc row />
                    </div>
                } />
            </div>
        </div>
    )
}

export default MainLineTwo;
