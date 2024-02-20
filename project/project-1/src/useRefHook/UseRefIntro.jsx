import React, { useRef } from 'react'

const UseRefIntro = () => {

    let balan = useRef();
    let bat = useRef();


    const handleChange = () => {
        // console.log(balan.current);

        balan.current.style.backgroundColor = "red";
        bat.current.style.backgroundColor = "green";
    }


  return (
    <div>
      <h1 onClick={handleChange}>ravi</h1>
      <p ref={balan}>--------</p>
      <p ref={bat}>--------</p>
      <p ref={balan}>--------</p>

    </div>
  )
}

export default UseRefIntro
