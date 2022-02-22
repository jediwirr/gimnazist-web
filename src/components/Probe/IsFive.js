import React, { memo, useMemo } from "react";

function IsFive({value}) {
    console.warn('Count 2 render');

    const getResult = useMemo(() => {
        let i = 0;
        while (i < 600000000) i++;
        return value === 5 ? "Это пять" : "Это не пять";
    }, [value]);

    return (
        <div>
            <p>{getResult}</p>
        </div>
    );
}

function areEqual(prevProps, nextProps) {
    if (nextProps.value === 5) {
        return false;
    } else {
        return true;
    }
}

// компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент
export default memo(IsFive, areEqual);

// обычный компонент преобразует пропсы в UI
// компонент высшего порядка преобразует компонент в другой компонент