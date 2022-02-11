import React, { FC } from "react";
import { ITopic } from "../../types/types";
import styles from "./Menu.module.css";

interface MenuProps {
    topics: ITopic[];
    renderItem: (item: ITopic) => React.ReactNode;
}

const Menu: FC<MenuProps> = ({topics, renderItem}) => {

    return (
        <div className={styles.menu}>
            {topics.map(renderItem)}
        </div>
    );
}

export default Menu;
