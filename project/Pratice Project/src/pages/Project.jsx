import React, { useState } from 'react'
import SectionComponent from '../Components/SectionComponent'
import ArticleComponent from '../Components/ArticleComponent'
import AnchorComponent from '../Components/AnchorComponent'
import InputFieldComponent from '../Components/InputFieldComponent';
import CardComponent from '../Components/CardComponent';

function Project() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your validation logic here
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <CardComponent imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dailyexcelsior.com%2Fthe-uniting-power-of-bhagwan-shri-ram%2F&psig=AOvVaw0QZZ3I1wqoifd3EoaAyKKD&ust=1713535876503000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKC2qv74y4UDFQAAAAAdAAAAABAE" title="hello" description="ram ram"/>
      <CardComponent imgurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJai_Shri_Ram&psig=AOvVaw0QZZ3I1wqoifd3EoaAyKKD&ust=1713535876503000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKC2qv74y4UDFQAAAAAdAAAAABAJ" title="hello" description="ram ram"/>
      <CardComponent imgurl="https://via.placeholder.com/300" title="hello" description="ram ram"/>
      <CardComponent imgurl="https://via.placeholder.com/300" title="hello" description="ram ram"/>
      <CardComponent imgurl="https://via.placeholder.com/300" title="hello" description="ram ram"/>

      </div>
      <SectionComponent >
        <h2 className="text-2xl font-bold mb-4">Section 1</h2>
        <p className="text-lg">Content for section 1 goes here.</p>
      </SectionComponent>

      <SectionComponent>
        <h2 className="text-2xl font-bold mb-4">Section 2</h2>
        <p className="text-lg">Content for section 2 goes here.</p>
      </SectionComponent>

      <ArticleComponent 
        title="Sample Article Title"
        author="John Doe"
        date="April 20, 2024" >
          <p>
          This is the content of the article. It can contain multiple paragraphs, images, and other elements.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </ArticleComponent>

        <AnchorComponent href="./" className="mr-4">Home</AnchorComponent>

        <AnchorComponent href="./about">About</AnchorComponent>

      <form onSubmit={handleSubmit}>
        <InputFieldComponent
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => {}}
          isValid={email && email.includes('@')} // Example validation, change as needed
        />
        <InputFieldComponent
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => {}}
          isValid={password.length >= 6} // Example validation, change as needed
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
      </form>

    </div>
  )
}

export default Project
