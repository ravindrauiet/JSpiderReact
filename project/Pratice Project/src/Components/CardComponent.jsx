import React from 'react'

function CardComponent({ title, description , imageUrl }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {imageUrl && <img className="w-full" src={imageUrl} alt="Card" />}
        <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </>
  )
}

export default CardComponent
