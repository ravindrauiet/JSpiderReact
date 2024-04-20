import React from 'react'
import LocalState from '../Components/UseStateComponents/LocalState'

function UseStatePage() {
  return (
    <div className="p-15 m-10">
      <h1 className="font-bold h-6 p-2 m-2 text-red-800"> Hello use state</h1>
      <LocalState />
    </div>
  )
}

export default UseStatePage
