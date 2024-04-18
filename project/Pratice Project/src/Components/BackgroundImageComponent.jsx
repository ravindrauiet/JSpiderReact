import React from 'react'

function BackgroundImageComponent({ title, subtitle, backgroundImage }) {

    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // You can adjust the height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Add a text shadow for better readabilitity
    };
  return (
    <header style={headerStyle}>
      <div>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </header>
  )
}

export default BackgroundImageComponent
