import React, { FC } from "react";
import { IArticle } from "../../types/types";
import styles from "./Article.module.css";

interface ArticleProps {
    item: IArticle;
    row?: boolean;
    hideDesc?: boolean;
    titleSize?: "main" | "news" | "small";
}

const Article: FC<ArticleProps> = ({item, row, hideDesc, titleSize}) => {

    return (
        <div>
            <h2 
                className={styles.title}
                style={{
                    fontSize:
                    titleSize === "main" ? 36 :
                    titleSize === "news" ? 22 :
                    titleSize === "small" ? 18 :
                    25
                }}
            >{item.title}</h2>
            <div className={row ? styles.rowItem : styles.item}>
                {item.imgPath ?
                    <figure>
                        <img src={item.imgPath?.split(',')[0]} alt="news-photo" />
                    </figure> : <></>
                }
                {hideDesc ?
                    <></> :
                    <p>{item.description}</p>
                }
            </div>
        </div>
    )
}

export default Article;
