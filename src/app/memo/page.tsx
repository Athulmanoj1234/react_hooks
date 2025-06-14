"use client"
import { useMemo, useState } from 'react';

import { initialItems } from './utils';

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => items.find((item: any) => item.id === count), [count] ); //here useMemo memrizes the value and runs only on intial render
    

  return (
    <div className='tutorial bg-white text-black'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Demo;
