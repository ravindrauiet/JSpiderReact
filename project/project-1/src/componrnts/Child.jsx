import React from 'react'
import Child1 from './Child1';

function Child (props) {
  const car = ['supra','black'];

  // console.log(props.props);
  return (
    <div>
      <h2>Heading</h2>
      <Child1 props={{props, car}} />
      {/* <Child1 prop1={props.props} prop2={car}/> */}
      {/* <Child props = {props.props} /> */}
      {/* <Child1 props={car}/> */}
    </div>
  )
}

export default Child
