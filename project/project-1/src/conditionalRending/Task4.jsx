import React, { useState } from 'react'
import Task4child from './Task4child'

const Task4 = () => {
    let [state,setState] = useState("true")

    const handleClick = () =>
    {
        setState(!state)
    }
  return (
    <div>
      {state && <Task4child />}
      <button onClick = {handleClick} className="btn border-spacing-3 bg-slate-600">clickme</button>
    </div>
  )
}

export default Task4
