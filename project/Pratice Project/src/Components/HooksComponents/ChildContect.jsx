import React,{useContext} from 'react'
import { colorMall } from './MainContext'
import SuperChildContext from './SuperChildContext';

function ChildContect() {
    const {mainColor} = useContext(colorMall);
  return (
    <div>
      <h1 style={{color: mainColor}}>Child Component</h1>
      <SuperChildContext />
    </div>
  )
}

export default ChildContect
