import React from 'react'
import SectionComponent from '../Components/SectionComponent'

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

    </div>
  )
}

export default Project
