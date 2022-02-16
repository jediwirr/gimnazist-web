import React, { FC } from "react";
import Articles from "../Articles/Articles";
import Article from "../Article/Article";
import styles from "./MainLineTwo.module.css";
import { IArticle } from "../../types/types";
import CategoryTitle from "../CategoyTitle/CategoryTitle";

interface MainLineTwoProps {
    articles: IArticle[];
}

const MainLineTwo: FC<MainLineTwoProps> = ({articles}) => {

    return (
        <div className={styles.MainLineTwo}>
            <Articles items={articles} row renderItem={item =>
                <div key={item.id} className={styles.lineTwoArticle}>
                    <CategoryTitle title={item.category} />
                    <Article key={item.title} item={item} titleSize="small" hideDesc row />
                </div>
            } />
        </div>
    )
}

export default MainLineTwo;
