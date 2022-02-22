// мемоизация - сохранение результатов выполнения функций для предотвращения повторных вычислений

const prevState = {
    callback: null,
    deps: null
}

function useCallback(callback, deps) {
    if (!prevState.deps || !deps) {
        prevState.callback = callback;
        prevState.deps = deps;

        return callback;
    }

    if (shallowEqual(deps, prevState.deps)) {
        return prevState.callback;
    }

    prevState.callback = callback;
    prevState.deps = deps;

    return callback;
}

const Test = ({title}) => {
    const callback = () => {
        console.log(title);
    };

    // const deps = [title];

    // const someFunction = useCallback(callback, deps);

    return (
        <button onClick={callback}>
            click me!
        </button>
    )
},

const Car = ({ car, onCarClick }) => {
    const onClick = () => onCarClick(car); // связываем onCarClick и объект car
    // нет пользы оборачивать метод в хук, так как не важно, ссылка ли это с прошлого или текущего рендера

    return (
        <button>
            {car.model}
        </button>
    );
};

const Cars = ({cars}) => {
    // const onCarClick = car => { // создается при каждом рендере
    //     console.log(car.model);
    // };

    const onCarClick = useCallback(car => { // мемоизированная функция - компоненты не будут рендериться лишний раз
        console.log(car.model);
    });

    return cars.map(car => {
        return (
            <Car key={car.id} car={car} onCarClick={onCarClick} /> // каждый раз новая ссылка на функцию (если без useCallback)
        );
    });
};