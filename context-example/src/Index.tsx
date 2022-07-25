import { useCounter } from "./CounterContext";
import { Link } from "react-router-dom";

const Index = () => {
    const counter = useCounter();
    return (
        <div>
            <h1>Index Page</h1>
            <Link to="/second">Go to second Page</Link>
            <br />
            Current count {counter.counter}
            <button onClick={() => counter.incrementCounter(1)}>
                Increment count
            </button>
        </div>
    );
};

export default Index;
