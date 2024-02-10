import React from 'react'
import Child2 from './Child2';

function Child1(props) {
    // let price =100;
    console.log(props);
  return (
    <div>
      <h2>Child 2</h2>
      <p>I am from props : {props.props.props.props[0]}</p>
      <p>I am from child 1 : {props.props.car[0]}</p>

      <Child2 props= {price}/>

    </div>
  )
}

export default Child1
