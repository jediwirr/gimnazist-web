import React, { FC, useState } from "react";
import { ITopic } from "../../types/types";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
    topic: ITopic;
}

const MenuItem: FC<MenuItemProps> = ({topic}) => {
    const [isCategoriesShown, setIsCategoriesShown] = useState(false)

    const showCategories = () => {
        if (topic.categories) {
            setIsCategoriesShown(!isCategoriesShown);
        }
    };

    return (
        <div className={styles.menuBlock}>
            <div className={styles.menuItem} onClick={() => showCategories()}>
                <p>{topic.title}</p>
            </div>
            {isCategoriesShown ?
                <div className={styles.menuList}>
                    {topic.categories?.map(category =>
                        <p key={category.title}>{category.title}</p>    
                    )}
                </div> : <></>
            }
        </div>
    );
}

export default MenuItem;
