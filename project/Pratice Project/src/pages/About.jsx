import React from 'react'
import Button from '../Components/Button'
import ListComponent from '../Components/ListComponent'
import StyledComponent from '../Components/StyledComponent';
import ParagraphComponent from '../Components/ParagraphComponent';

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

      {/* default className  */}
      <StyledComponent>This is about</StyledComponent>
      {/* Exporting className  */}
      <StyledComponent className={"bg-green-500"}>
        This is about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione tempora esse dicta vitae sequi error minus numquam hic facilis, itaque iure perspiciatis consectetur sit atque quasi consequuntur ad enim cumque totam eum corrupti accusamus ducimus reprehenderit. Rem libero, iusto nam odit aperiam dicta asperiores incidunt quod cum voluptas? Officia quod culpa, at ipsum sunt dignissimos enim veritatis mollitia accusamus. Saepe, excepturi commodi reprehenderit aspernatur recusandae assumenda dolorum, doloremque nisi labore illo voluptas totam quam ipsa! Provident architecto eaque asperiores consequuntur nisi illum voluptatum sit ex cumque at, adipisci, doloremque quaerat possimus est? Dignissimos vero quas ab illo vel numquam?
      </StyledComponent>

      <ParagraphComponent > <p>Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis tempora iure repudiandae. Eligendi saepe id quae ullam iure nam modi, esse repudiandae a voluptatem cum ipsum sed deserunt voluptatum perferendis facilis ad, porro suscipit? Aliquid fugit doloremque officiis voluptatum sunt, odit inventore aperiam error maxime commodi exercitationem, minima quibusdam in corrupti similique, quidem dolor nostrum voluptate accusamus perspiciatis eligendi ex. Sit voluptatum necessitatibus obcaecati veritatis ducimus reprehenderit, earum architecto deleniti illum error fugit magni sapiente suscipit est optio, voluptas eius voluptatem culpa? Sint voluptatibus at ea deleniti necessitatibus quaerat nemo, est ex quo totam! Vero doloremque illo a asperiores.</p></ParagraphComponent>

      {/* Reuseable ListComponent */}
      <ListComponent data={data}/>

      {/* Reuseable Button Component */}
      <Button className ={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"}><h1>More About Me</h1></Button>

      
    </div>
  )
}

export default About
