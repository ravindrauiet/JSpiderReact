import React, { useRef, useState } from 'react';

const ConditionalRenderingWithRef = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Conditional Rendering with useRef Example</h2>
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Visibility
        </button>
        <div className="mt-4">
          <div ref={ref} style={{ display: isVisible ? 'block' : 'none' }} className="bg-green-200 p-4 rounded">
            <p>This element is visible!</p>
          </div>
          <div style={{ display: isVisible ? 'none' : 'block' }} className="bg-red-200 p-4 rounded">
            <p>This element is hidden!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionalRenderingWithRef;
