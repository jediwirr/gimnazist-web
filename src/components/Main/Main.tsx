import React, { FC, useEffect, useState } from "react";
import { IArticle } from "../../types/types";
import MainLineFive from "../MainLineFive/MainLineFive";
import MainLineFour from "../MainLineFour/MainLineFour";
import MainLineOne from "../MainLineOne/MainLineOne";
import Sidebar from "../Sidebar/Sidebar";
import MainLineThree from "../MainLineThree/MainLineThree";
import styles from "./Main.module.css";
import MainLineTwo from "../MainLineTwo/MainLineTwo";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer";

const Main: FC = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        fetchAticles();
    }, []);

    const fetchAticles = async () => {
        await fetch('https://gimnazist.herokuapp.com/api/articles/')
            .then(res => res.json())
            .then(res => setArticles(res))
            .catch(err => console.log(err));
    };

    return (
        <>
            <Sidebar articles={articles.filter(item => item.category === "Что нового?")} />
            <div className={styles.mainLeft}>
                <ArticlesContainer>
                    <MainLineOne articles={articles} />
                </ArticlesContainer>
                
                <ArticlesContainer>
                    <MainLineTwo articles={articles?.filter(item => item.position === "line-two")} />
                </ArticlesContainer>

                <ArticlesContainer>
                    <MainLineThree articles={articles} />
                </ArticlesContainer>

                {/* <ArticlesContainer>
                    <MainLineFour articles={articles} />
                </ArticlesContainer> */}

                <ArticlesContainer>
                    <MainLineFive articles={articles} />
                </ArticlesContainer>
            </div>
        </>
    )
}

export default Main;
