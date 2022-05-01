import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import loadable from '@loadable/component';
const ReactJson = loadable(() => import('react-json-view'));
import styles from '../styles/Home.module.css';
import { LinkedList } from '../features/algorithms/LinkedList';

const Algorithms: NextPage = () => {
  const [linkedList, setLinkedList] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          The Ultimate JavaScript Coding Interview & Computer Science Bootcamp
        </title>
        <meta
          name="description"
          content="The Ultimate JavaScript Coding Interview & Computer Science Bootcamp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {linkedList && <ReactJson src={linkedList} />}

        {!linkedList ? (
          <button
            className={styles.button}
            onClick={() => setLinkedList(new LinkedList(1))}
          >
            Create Linked List
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => setLinkedList((linkedList) => linkedList.push(2))}
          >
            Push to Linked List
          </button>
        )}
      </main>
    </div>
  );
};

export default Algorithms;
