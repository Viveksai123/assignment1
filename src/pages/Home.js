import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSortAlphaDown, FaSortAlphaUp, FaUser, FaEnvelope, FaCity } from 'react-icons/fa';
import Loader from '../components/LoadingSpinner';
import 'animate.css';




const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6 bg-gradient-to-br from-black via-[#2a2a2a] to-red-900 min-h-screen">
      
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6 font-playfair animate__animated animate__fadeInLeftBig">
        User Directory
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 animate__animated animate__fadeInRightBig">
        <input
          type="text"
          placeholder="Search users..."
          className="p-3 w-full sm:w-1/2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 shadow-md outline-none focus:ring-2 focus:ring-red-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="mt-4 sm:mt-0 sm:ml-4 p-3 bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-500 hover:to-red-700 text-white rounded-lg shadow-lg flex items-center justify-center gap-2"
        >
          {sortOrder === 'asc' ? (
            <>
              <FaSortAlphaDown className="text-xl" />
              Sort A-Z
            </>
          ) : (
            <>
              <FaSortAlphaUp className="text-xl" />
              Sort Z-A
            </>
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <Link
            to={`/user/${user.id}`}
            key={user.id}
            className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg text-white shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeInBig"
          >
            <h2 className="text-lg font-bold text-red-500 font-serif mb-2 flex items-center gap-2 animate__animated animate__fadeInRightBig">
              <FaUser className="text-red-600" />
              {user.name}
            </h2>
            <p className="text-sm text-gray-300 flex items-center gap-2 animate__animated animate__fadeInLeftBig">
              <FaEnvelope className="text-gray-400" />
              {user.email}
            </p>
            <p className="text-sm text-gray-500 italic flex items-center gap-2 animate__animated animate__fadeInLeftBig">
              <FaCity className="text-gray-400" />
              {user.address.city}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
