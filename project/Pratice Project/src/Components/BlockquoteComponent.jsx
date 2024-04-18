import React from 'react'

function BlockquoteComponent({children , author , cite}) {
  return (
    <blockquote cite={cite} className="border-l-4 border-gray-500 italic bg-gray-100 p-4 rounded-md">
      <p className="text-lg">{children}</p>
      <footer className="text-gray-600 mt-2">- {author}</footer>
    </blockquote>
  )
}

export default BlockquoteComponent
