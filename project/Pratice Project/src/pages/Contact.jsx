import React from 'react'
import Button from '../Components/Button'
import LinkComponent from '../Components/LinkComponent'

function Contact() {
  return (
    <>
      <h1 className={"bg-green-500 text-white h-80 w-15 p-4 m-4"}>contact</h1>
      
      
      {/* <Button style={{ backgroundColor: "red", color: "white" }} onClick={() => { alert('button clicked') }}>Click me</Button>
      <Button>Click </Button> */}
      
      <Button> <LinkComponent link="https://www.linkedin.com/in/ravindra-jha75/" >Linkdin</LinkComponent> </Button>
      

      <Button className ={"bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"}><h1>Contact Me</h1></Button>
    </>
  )
}

export default Contact
