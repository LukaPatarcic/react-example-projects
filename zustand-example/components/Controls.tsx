import { useStore } from "../store/counterStore";

export default function Controls() {
    const increasePopulation = useStore((state) => state.increase);
    return <button onClick={() => increasePopulation(1)}>one up</button>;
}
