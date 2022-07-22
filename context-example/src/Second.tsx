import {useCounter} from "./CounterContext";
import {Link} from "react-router-dom";

const Second = () => {
	const counter = useCounter();
	return (<div>
		<h1>Second Page</h1>
		<Link to="/">Go to index Page</Link><br />
		Current count {counter.counter}
		<button onClick={() => counter.incrementCounter(1)}>Increment count</button>
	</div>)
}

export default Second;
