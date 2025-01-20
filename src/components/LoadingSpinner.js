import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-red-600 border-opacity-90"></div>
        <h2 className="text-white text-xl font-bold mt-4">
          Loading <span className="text-red-600">...</span>
        </h2>
      </div>
    </div>
  );
};

export default Loader;
