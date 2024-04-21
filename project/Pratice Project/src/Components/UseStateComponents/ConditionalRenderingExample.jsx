import React, { useState } from 'react';

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Conditional Rendering Example</h2>
        {isLoggedIn ? (
          <div>
            <p className="text-green-600">You are logged in!</p>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p className="text-red-600">You are not logged in!</p>
            <button 
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConditionalRenderingExample;
