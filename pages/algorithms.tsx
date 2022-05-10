import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import loadable from '@loadable/component';
const ReactJson = loadable(() => import('react-json-view'));
import styles from '../styles/Home.module.css';
import { LinkedList } from '../features/algorithms/linkedList/LinkedList';

const Algorithms: NextPage = () => {
  const [linkedList, setLinkedList] = useState(null);
  const [push, setPush] = useState('');
  const [unshift, setUnshift] = useState('');

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
          <div className={styles.controls}>
            <input
              className={styles.input}
              type="text"
              value={push}
              onChange={(e) => setPush(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => {
                linkedList.push(push);
                setLinkedList((linkedList) => linkedList);
              }}
            >
              Push to Linked List
            </button>

            <input
              className={styles.input}
              type="text"
              value={unshift}
              onChange={(e) => setUnshift(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => {
                linkedList.unshift(unshift);
                setLinkedList((linkedList) => linkedList);
              }}
            >
              Unshift to Linked List
            </button>

            <button className={styles.button} onClick={() => linkedList.pop()}>
              Pop from Linked List
            </button>

            <button
              className={styles.button}
              onClick={() => linkedList.shift()}
            >
              Shift from Linked List
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Algorithms;
