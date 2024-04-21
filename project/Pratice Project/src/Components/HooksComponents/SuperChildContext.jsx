import React,{useContext} from 'react'

import { colorMall } from './MainContext'

function SuperChildContext() {
    const {mainColor,getDay} = useContext(colorMall)
    const day = "Sunday";
  return (
    <div>
      <h1  style={{color: mainColor}}>This is Super child component</h1>
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded" onClick={()=>getDay(day)}>Click Me</button>
    </div>
  )
}

export default SuperChildContext
