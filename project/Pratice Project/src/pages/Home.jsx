import React from 'react'
import Button from '../Components/Button'

function Home() {
  return (
    <div>
    <h1 className={"bg-red-100 text-blue h-80 w-15 p-4 m-4 "}>Home</h1>
    <Button className ={"bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"}><h1>Go to</h1></Button>
    </div>
  )
}

export default Home
