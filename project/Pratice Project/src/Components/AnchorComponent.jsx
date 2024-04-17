import React from 'react'

function AnchorComponent({ href, className, children }) {
  return (
    <a href={href} className={`inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
      {children}
    </a>
  )
}

export default AnchorComponent
