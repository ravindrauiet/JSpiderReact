import React from 'react'
import LocalState from '../Components/UseStateComponents/LocalState'
import ConditionalRenderingExample from '../Components/UseStateComponents/ConditionalRenderingExample'
import EventHandlingExample from '../Components/UseStateComponents/EventHandlingExample'

function UseStatePage() {
  return (
    <div className="p-15 m-10">
      <h1 className="font-bold h-6 p-2 m-2 text-red-800"> Hello use state</h1>
      <LocalState />
      <ConditionalRenderingExample />
      <EventHandlingExample />
    </div>
  )
}

export default UseStatePage
