import { useStore } from "../store/counterStore";

export default function Counter() {
    const count = useStore((state) => state.counter);
    return <h1>{count} around here ...</h1>;
}
