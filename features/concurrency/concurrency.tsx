import { useEffect, useState, useTransition } from 'react';
import { useWorker } from '@koale/useworker';
import styles from './styles.module.css';
import ConcurrencyItems from '../../components/concurrency-items/concurrency-items';

export function generateItems() {
  const items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(`Item ${i + 1}`);
  }
  return items;
}

export function filterItems(filterTerm, dummyItems) {
  if (!filterTerm) {
    return dummyItems;
  }

  return dummyItems.filter((item) => item.includes(filterTerm));
}

function Concurrency() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');
  const [dummyItems, setDummyItems] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [generateItemsWorker] = useWorker(generateItems);
  // const [filterItemsWorker] = useWorker(filterItems);
  const updateFilterHandler = async (event) => {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    // const result = await filterItemsWorker(event.target.value, dummyItems); // non-blocking UI
    // console.log(event.target.value, result);
    // setFilteredItems(result);
  };

  useEffect(() => {
    generateItemsWorker();
    // .then((dummyItems) => {
    //   setFilteredItems(dummyItems);
    // })
    // .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <input
        className={styles.textbox}
        value={filterTerm}
        onChange={updateFilterHandler}
      />
      {isPending && <p style={{ color: 'white' }}>Updating List...</p>}
      <div className={styles.row}>
        <ConcurrencyItems items={filteredItems} />
      </div>
    </div>
  );
}

export default Concurrency;
