import React from 'react'
import Button from '../Components/Button'

function About() {
  return (
    <div>
      <h1 className={"bg-blue-500 text-white h-80 w-15 p-4 m-4"}>About</h1>
      <Button className ={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"}><h1>More About Me</h1></Button>
    </div>
  )
}

export default About
