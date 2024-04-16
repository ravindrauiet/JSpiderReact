import React from 'react'

function ParagraphComponent({children}) {
  return (
    <div className="font-sans text-base leading-relaxed text-blue-700 mb-4"> 
      {children}
    </div>
  )
}

export default ParagraphComponent
