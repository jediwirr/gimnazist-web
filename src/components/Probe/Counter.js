import React, { useState } from "react";
import { css } from "@emotion/react";
import Count from "./Count";
import IsFive from "./IsFive";

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        `}>

            <h5>Counter 1:</h5>
            <button onClick={() => setCount1(count1 + 1)} css={css`
                width: 60px;
                height: 60px;
            `}> 
                + 
            </button>
            <Count value={count1} />
            

            <h5>Counter 2:</h5>
            <div>
                <button onClick={() => setCount2(count2 + 1)} css={css`
                    width: 60px;
                    height: 60px;
                `}> + </button>
                <div css={css`
                    background-color: #dedede;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 5px 0;
                `}>
                    <p>{count2}</p>
                </div>
                <IsFive value={count2} />
            </div>

        </div>
    );
};

export default Counter;
