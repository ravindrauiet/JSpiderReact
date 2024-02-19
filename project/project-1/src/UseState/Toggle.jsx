import React, { useState } from 'react'

const Toggle= () => {
    let [toggle,setToggle] = useState(false)
    let handletoggle = ()=>{
        setToggle(!toogle)
        console.log(toggle)
    }

  return (
    <div>
      {/* <h1 className='border-2 border-black w-[60px]' onClick={handletoggle }>{toogle? "OFF" : "ON"}</h1> */}

      <h1>Heading</h1>
    </div>
  )
}

export default Toggle
