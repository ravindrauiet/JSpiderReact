import React,{useRef} from 'react'

function UseRef() {
  const inputRef = useRef();

  function handleRef(){
    inputRef.current.value = '100';
    inputRef.current.style.color="red"
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" placeholder="Enter name" ref={inputRef}></input>
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded" onClick={handleRef} >Handle Ref</button>

    </div>
  )
}

export default UseRef
