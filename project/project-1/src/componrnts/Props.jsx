import React from 'react'
import Child from './Child'

function Props() {
  const bike = [10,20,30,40,50,60];
  return (
    <div>
      <h1>heading</h1>
      <Child props={bike} />
    </div>
  )
}

export default Props
