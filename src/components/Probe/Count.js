import React, { memo } from "react";
import { css } from "@emotion/react";

export default memo(function Count({value}) {
    console.warn('Count 1 render');

    return (
        <div>
            <div css={css`
                background-color: #dedede;
                width: 60px;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 5px 0;
            `}>
                <p>{value}</p>
            </div>
        </div>
    );
});
