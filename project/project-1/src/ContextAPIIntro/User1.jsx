import React , {useContext} from 'react'
import {mall} from './Mall'

const User1 = () => {
    console.log(mall);
    let data = useContext(mall)
    console.log(data);

    let{cloth , devices} = data;
    console.log(cloth , devices);
  return (
    <div>
      <h1>Heading</h1>
      <h2>{cloth }</h2>
    </div>
  )
}

export default User1
