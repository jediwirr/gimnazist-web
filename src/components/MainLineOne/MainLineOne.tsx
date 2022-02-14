import React, { FC, useEffect, useState } from "react";
import Article from "../Article/Article";
import styles from "./MainLineOne.module.css";
import { IArticle } from "../../types/types";

interface MainLineOneProps {
    articles: IArticle[];
}

const MainLineOne: FC<MainLineOneProps> = ({articles}) => {
    const [mainArticle, setMainArticle] = useState<IArticle>();
    const [topArticle, setTopArticle] = useState<IArticle>();

    useEffect(() => {
        let arrMain = Array<IArticle>();
        let arrTop = Array<IArticle>();

        articles?.map(article => {
            
            if (article.position === "main") {
                arrMain.push(article);
            } else if (article.position === "top") {
                arrTop.push(article);
            }
        });

        setMainArticle(arrMain[0]);
        setTopArticle(arrTop[0]);
    }, [articles])

    return (
        <div className={styles.mainLineOne}>
            <div className={styles.mainArticle}>
                {mainArticle ?
                    <Article item={mainArticle} /> :
                    <></>
                }
            </div>
            <div className={styles.topArticle}>
                {topArticle ?
                    <Article item={topArticle} /> :
                    <></>
                }
            </div>
        </div>
    )
}

export default MainLineOne;
