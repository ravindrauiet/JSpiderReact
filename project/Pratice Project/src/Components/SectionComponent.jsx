import React from 'react'

function SectionComponent({children}) {
  return (
      <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default SectionComponent
