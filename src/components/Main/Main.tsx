import React, { FC, useEffect, useState } from "react";
import { IArticle } from "../../types/types";
import MainLineFive from "../MainLineFive/MainLineFive";
import MainLineFour from "../MainLineFour/MainLineFour";
import MainLineOne from "../MainLineOne/MainLineOne";
import Sidebar from "../Sidebar/Sidebar";
import MainLineThree from "../MainLineThree/MainLineThree";
import styles from "./Main.module.css";
import MainLineTwo from "../MainLineTwo/MainLineTwo";

const Main: FC = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        fetchAticles();
    }, []);

    const fetchAticles = () => {
        fetch('https://gimnazist.herokuapp.com/api/articles/')
            .then(res => res.json())
            .then(res => setArticles(res))
            .catch(err => console.log(err));
    }

    return (
        <>
            <Sidebar articles={articles.filter(item => item.category === "Что нового?")} />
            <div className={styles.mainLeft}>
                <MainLineOne articles={articles} />
                <MainLineTwo articles={articles?.filter(item => item.position === "line-two")} />
                <MainLineThree articles={articles} />
                <MainLineFour articles={articles} />
                <MainLineFive articles={articles} />
            </div>
        </>
    )
}

export default Main;
