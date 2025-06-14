"use client"

import React, { useRef, useState } from 'react'

const Refrender = () => {
    const [ count, setCount ] = useState<number>(0); //optional for re rendering
    const countRef = useRef(0);

    const updateCount = () => {
       setCount(prev => prev + 1);  //optional for re rerendering
        countRef.current++;

        console.log("state count:", count); //
        console.log("ref count:", countRef.current);
    }

  return (
    <div>
      count: {countRef.current}
      <button onClick={updateCount}>increament</button>
    </div>
  )
}

export default Refrender
