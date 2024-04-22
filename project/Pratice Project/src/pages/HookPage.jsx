import React from 'react'
import UseRef from '../Components/HooksComponents/UseRef'
import UseMemo from '../Components/HooksComponents/UseMemo'
import MainContext from '../Components/HooksComponents/MainContext'
import ConditionalRenderingWithRef from '../Components/HooksComponents/ConditionalRenderingWithRef'

function HookPage() {
  return (
    <div>
    <div className="p-15 m-10">
      <h1 className="font-bold h-6 p-2 m-2 text-red-800"> Hello Functional Hook</h1>
      <UseRef />

      <UseMemo />

      <MainContext />

      <ConditionalRenderingWithRef />
    </div>
    </div>
  )
}

export default HookPage
