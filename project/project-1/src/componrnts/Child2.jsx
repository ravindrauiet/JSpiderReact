import React from 'react'

function Child2({props = 200}) {
    console.log(props);
  return (
    <div>
      <h3>value  : {props}</h3>
    </div>
  )
}

export default Child2
