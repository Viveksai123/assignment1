import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className={`p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* App Logo */}
        <Link to="/" className="text-2xl font-bold">
          User Directory
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <a
            href="https://jsonplaceholder.typicode.com/users"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            API Docs
          </a>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}
        >
          {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
};

export default Header;
