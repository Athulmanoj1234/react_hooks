"use client"

import React, { useRef, useState } from 'react'

const Refrender = () => {
    const [ count, setCount ] = useState<number>(0); //optional for re rendering
    const countRef = useRef(0);
    const hooveredElementRef = useRef<HTMLDivElement | null>(null);

    const updateCount = () => {
       setCount(prev => prev + 1);  //optional for re rerendering
        countRef.current++;

        console.log("state count:", count); //
        console.log("ref count:", countRef.current);
    }

    const toBeHooveredAction = () => {
      //writing the method to be hoovered
      hooveredElementRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }


    
  return (
    <div>
      count: {countRef.current}
      <button onClick={toBeHooveredAction} className='bg-blue-500'>About Me</button>
      <button onClick={updateCount} className='relative'>increament</button>
      <div className='h-[400px] w-[400px] text-black bg-white absolute left-[50%] top-[120%] flex flex-col items-center gap-3' ref={hooveredElementRef}>
        <h1 className=''>I am Athul Manoj aself taught developer</h1>
        <p>expertised in MERN stack</p>
      </div>
      <div></div>  
    </div>
  )
}

export default Refrender
