import React, { FC, useEffect, useState } from "react";
import Article from "../Article/Article";
import styles from "./MainLineThree.module.css";
import { IArticle } from "../../types/types";
import CategoryTitle from "../CategoyTitle/CategoryTitle";

interface MainLineThreeProps {
    articles: IArticle[];
}

const MainLineThree: FC<MainLineThreeProps> = ({articles}) => {
    const [positionA, setPositionA] = useState<IArticle>();
    const [positionB, setPositionB] = useState<IArticle>();

    useEffect(() => {
        handleSort();
    }, [articles])

    const handleSort = () => {
        let arrA = Array<IArticle>();
        let arrB = Array<IArticle>();

        articles?.map(article => {
            
            if (article.position === "line-three-a") {
                arrA.push(article);
            } else if (article.position === "line-three-b") {
                arrB.push(article);
            }
        });

        setPositionA(arrA[0]);
        setPositionB(arrB[0]);
    };

    return (
        <div className={styles.MainLineThree}>
            <div className={styles.lineThreeArticle}>
                {positionA ?
                    <>
                        <CategoryTitle title={positionA.category} />
                        <Article item={positionA} button />
                    </> : null
                }
            </div>
            <div className={styles.lineThreeArticle}>
                {positionB ?
                    <>
                        <CategoryTitle title={positionB.category} />
                        <Article item={positionB} button />
                    </> : null
                }
            </div>
        </div>
    )
}

export default MainLineThree;
