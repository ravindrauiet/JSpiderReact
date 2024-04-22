import React, { useState } from 'react';

const EventHandlingExample = () => {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    setButtonText('Button clicked');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Event Handling Example</h2>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EventHandlingExample;
