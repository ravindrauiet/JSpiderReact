import React from 'react'
import UseRef from '../Components/HooksComponents/UseRef'

function HookPage() {
  return (
    <div>
    <div className="p-15 m-10">
      <h1 className="font-bold h-6 p-2 m-2 text-red-800"> Hello Functional Hook</h1>
      <UseRef />
    </div>
    </div>
  )
}

export default HookPage
