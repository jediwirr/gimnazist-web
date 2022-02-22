// мемоизация - сохранение результатов выполнения функций для предотвращения повторных вычислений

import { useState } from "react";

// функиция-обертка должна быть чистой
const memo = (fn) => {
    const cache = {};

    return (n) => {
        if (n in cache) {
            return cache[n];
        }

        return cache[n] = fn(n);
    };
};

const factorial = memo((x) => {

    console.log('calculation for x=' + x);

    return (!x || x === 1) ?
        1 : x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(5));

const otherFunc = (total) => {
    const price = hardCalc(total);
    return price;
}

let lastTotal = 0; // костыли, чтобы функция не выполнялась каждый раз

const { total } = Api.getProducts("site.ru");

if (lastTotal !== total) { // костыли, чтобы функция не выполнялась каждый раз
    otherFunc(total);
}

const price = useMemo(hardFunc, [total]);