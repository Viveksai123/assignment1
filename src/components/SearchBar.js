import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="w-full relative">
    <input
      type="text"
      placeholder="Search users..."
      className="p-3 border border-gray-400 rounded-lg w-full shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:shadow-md animate__animated animate__fadeIn"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {searchTerm && (
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors duration-200 ease-in-out"
        onClick={() => setSearchTerm('')}
      >
        ✕
      </button>
    )}
  </div>
);

export default SearchBar;
