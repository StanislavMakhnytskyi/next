import { useDeferredValue } from 'react';

function ConcurrencyItems({ items }) {
  const deferredItems = useDeferredValue(items);
  return (
    <ul>
      {deferredItems.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ConcurrencyItems;
