import React, { useState, useMemo } from 'react'
import ParagraphComponent from '../ParagraphComponent'

function UseMemo() {

    const [count, setCount] = useState(1)
    const [item, setItem] = useState(1)

    function handleCount() {
        setCount(count + 10)
    }
    function handleItem() {
        setItem(item - 10)
    }

    const memoHandle = useMemo(function multiply(){
        console.warn("Attempt")
        return count * 5;
    },[count])

    return (
        <>
            <h2 className="h-6 m-4 p-4 text-blue-700">{count}</h2>
            <h2 className="h-6 m-4 p-4 text-blue-700">{item}</h2>
            <h2 className="h-6 m-4 p-4 text-blue-700">{memoHandle}</h2>

            <button onClick={handleCount} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">click me</button>
            <button onClick={handleItem} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">click me</button>


        </>
    )
}

export default UseMemo
