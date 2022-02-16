import React, { FC, useEffect, useState } from "react";
import Article from "../Article/Article";
import styles from "./MainLineOne.module.css";
import { IArticle } from "../../types/types";
import CategoryTitle from "../CategoyTitle/CategoryTitle";

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
                    <>
                        <CategoryTitle title={mainArticle.category} />
                        <Article item={mainArticle} titleSize="main" button />
                    </> : null
                }
            </div>
            <div className={styles.topArticle}>
                {topArticle ?
                    <>
                        <CategoryTitle title={topArticle.category} />
                        <Article item={topArticle} button />
                    </> : null
                }
            </div>
        </div>
    )
}

export default MainLineOne;
