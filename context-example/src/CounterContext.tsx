import { createContext, useState, useContext } from "react";

interface UContext {
    counter: number;
    incrementCounter: (by: number) => void;
}

interface Props {
    children: JSX.Element;
}

const CounterContext = createContext<Partial<UContext>>({});

export const CounterProvicer = ({ children }: Props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = (by: number) => {
        setCounter((counter) => counter + by);
    };

    return (
        <CounterContext.Provider
            value={{
                counter,
                incrementCounter,
            }}
        >
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = (): UContext =>
    useContext(CounterContext) as UContext;
