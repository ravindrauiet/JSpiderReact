import React, { useState } from 'react'

function HandleArray() {
    let [names, setNames] = useState("ravi", "sohan");
    
  return (
    <div>
      <h1>Heading</h1>
      <h2>{names.map((value, index) => <p key={index}>my name is : {{value}}</p>)}</h2>
    </div>
  )

}
export default HandleArray
