import React, { useState } from 'react'
import Button from '../Button';

function LocalState() {
    const [count , setCount] = useState(0);


    function handleInc() {
        setCount(count+1);
    }
    function handleDec() {
        setCount(count-1);
    }
  return (
    <>
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded" 
        onClick={(handleInc)}>+</button>


      <h2  className="font-bold h-4 p-2 m-10 text-red-800"> {count}</h2>

      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"  onClick={(handleDec)}>-</button>
    </>
  )
}

export default LocalState
