import React from 'react'
import Button from '../Components/Button'
import ListComponent from '../Components/ListComponent'

function About() {
  const data = [
    {
      name: "Ravindra",
      phoneNo: "9999999999",
      email: "ravindranathjha76@gmail.com"
    },
    {
      name: "John Doe",
      phoneNo: "1234567890",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      phoneNo: "9876543210",
      email: "jane.smith@example.com"
    }
  ];
  return (
    <div>
      <h1 className={"bg-blue-500 text-white h-10  p-4 m-4"}>About</h1>
      <ListComponent data={data}/>
      <Button className ={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"}><h1>More About Me</h1></Button>
    </div>
  )
}

export default About
