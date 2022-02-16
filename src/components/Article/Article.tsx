import React, { FC } from "react";
import { IArticle } from "../../types/types";
import { Button } from "../Button/Button";
import styles from "./Article.module.css";
import { css } from "@emotion/react";

interface ArticleProps {
    item: IArticle;
    row?: boolean;
    hideDesc?: boolean;
    titleSize?: "main" | "news" | "small";
    button?: boolean;
}

const Article: FC<ArticleProps> = ({item, row, hideDesc, titleSize, button}) => {

    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ededed;
            border-radius: 15px;
            padding: 8px;
            margin: 3px;
            cursor: pointer;

            &:active {
                opacity: .5;
            }
        `}>
            <h2 css={css`
                font-weight: bold;
                font-size: ${
                    titleSize === "main" ? "36px" :
                    titleSize === "news" ? "20px" :
                    titleSize === "small" ? "18px" :
                    25
                }
            `}>
                {item.title}
            </h2>
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
            {button ?
                <Button>Читать далее &#8594;</Button> : null
            }
        </div>
    )
}

export default Article;
