import React, { useState } from 'react'
import SectionComponent from '../Components/SectionComponent'
import ArticleComponent from '../Components/ArticleComponent'
import AnchorComponent from '../Components/AnchorComponent'
import InputFieldComponent from '../Components/InputFieldComponent';
import CardComponent from '../Components/CardComponent';
import BackgroundImageComponent from '../Components/BackgroundImageComponent';
import GridLayoutComponent from '../Components/GridLayoutComponent';
import BlockquoteComponent from '../Components/BlockquoteComponent';

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
      <BackgroundImageComponent 
        title="Welcome to My Website"
        subtitle="Explore our services and offerings"
        backgroundImage="https://unsplash.com/photos/a-group-of-white-and-gold-tiles-on-a-white-surface-nPZ68nehUUo"
      />
      
      <GridLayoutComponent>Block 1</GridLayoutComponent>

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


      <BlockquoteComponent cite="https://en.wikipedia.org/wiki/India" author="Ravindra" >India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.</BlockquoteComponent>
    </div>
  )
}

export default Project
