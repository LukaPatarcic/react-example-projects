import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Counter from "../components/Counter";
import Controls from "../components/Controls";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zustand Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>First Page</h1>
      <Counter />
      <Controls />
        <Link href="/second">Go to second page</Link>

    </div>
  )
}

export default Home
