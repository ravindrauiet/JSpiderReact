import React, { useState } from 'react'
import SectionComponent from '../Components/SectionComponent'
import ArticleComponent from '../Components/ArticleComponent'
import AnchorComponent from '../Components/AnchorComponent'
import InputFieldComponent from '../Components/InputFieldComponent';

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
