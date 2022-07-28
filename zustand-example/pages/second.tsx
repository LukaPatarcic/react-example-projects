import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useCounter } from "../store/counterStore";

const Home: NextPage = () => {
    const count = useCounter((state) => state.counter);
    const increasePopulation = useCounter((state) => state.increase);
    return (
        <div>
            <Head>
                <title>Zustand Example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Second Page</h1>
            <h1>{count} around here ...</h1>
            <button onClick={() => increasePopulation(1)}>one up</button>;
            <Link href="/">Go to first page</Link>
        </div>
    );
};

export default Home;
