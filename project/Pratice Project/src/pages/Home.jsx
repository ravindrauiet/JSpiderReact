import React from 'react'
import Button from '../Components/Button'
import ImageComponents from '../Components/ImageComponents'
import NavigationComponent from '../Components/NavigationComponent'

function Home() {
  return (
    <div>
      <h1 className={"bg-red-100 text-blue h-30 w-15 p-4 m-4 "}>Home</h1>
      <Button ><NavigationComponent link="./usestate">Use State</NavigationComponent></Button>
      <Button ><NavigationComponent link="./usehook">Hook Component</NavigationComponent></Button>
      <Button > <NavigationComponent link="./project">Project</NavigationComponent> </Button>
      <div className={"display: inline-flex"}>
        {/* With Placeholder */}
        <ImageComponents
          src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Example Image"
          placeholder="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        {/* Lazy Loading */}
        <ImageComponents
          //src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lazy Loaded Image"
          placeholder="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          lazy
        />
      </div>
      <Button className={"bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"}><h1>Go to</h1></Button>
    </div>
  )
}

export default Home
