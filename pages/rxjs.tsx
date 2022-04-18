import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Counter from '../features/counter/counter';
import Concurrency from '../features/concurrency/concurrency';

import F from '../rxjs';

F();

const Rxjs: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>rxjs - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>rxjs</h2>
        <button className="unique-button-classname">Click me</button>
      </main>
    </div>
  );
};

export default Rxjs;
