import { FC } from 'react';
import { useWorker } from '@koale/useworker';

const numbers = [...Array(5000000)].map((e) => ~~(Math.random() * 1000000));
const sortNumbers = (nums: number[]) => nums.sort();

const ComponentWithWorker: FC = () => {
  const [sortWorker] = useWorker(sortNumbers);

  const runSort = async () => {
    const result = await sortWorker(numbers); // non-blocking UI
    console.log(result);
  };

  return (
    <button type="button" onClick={runSort}>
      Run Sort
    </button>
  );
};

export default ComponentWithWorker;
