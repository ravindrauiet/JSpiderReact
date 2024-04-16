import React from 'react'
import SectionComponent from '../Components/SectionComponent'
import ArticleComponent from '../Components/ArticleComponent'

function Project() {
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

    </div>
  )
}

export default Project
