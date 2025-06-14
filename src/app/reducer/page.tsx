"use client"
import { error } from 'console';
import React, { useReducer } from 'react'

interface State {
    count: 0,
    error: string | null;
}

interface Action {
    type: 'increament' | 'decreament'
}

function reducer(state: State, action: Action) {
    const { type } = action;
    switch (type) {
        case 'increament': {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return { ...state, 
                count: hasError ? state.count : newCount,
                error: hasError ? 'maximum number reached' : '',
             } ;
        }
        case 'decreament': {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return { ...state, 
                count: hasError ? state.count : newCount,
                error: hasError ? 'minimum number reached' : '',
            } ;
        }
        default: 
        return state;
    } 
}


const ReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,  //set the initial state of count to 0
        error: null, //intial value of error to null
    });

  return (
    <div className='tutorial'>
      <div>Count: {state.count}</div>
      {state.error && <div className='mb-2 text-red-500'>{state.error}</div>}
      <button className='mb-2' onClick={() => dispatch({ type: 'increament' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decreament' })}>Decrement</button>
    </div>
  )
}

export default ReducerDemo
