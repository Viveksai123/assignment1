import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaBuilding, FaGlobe, FaArrowLeft } from 'react-icons/fa';
import { fetchUsers } from '../utils/api';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await fetchUsers();
      const foundUser = users.find((u) => u.id === parseInt(id));
      setUser(foundUser);
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg animate-pulse">Loading user...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 min-h-screen text-white">
      {/* Go Back Button */}



      {/* User Details */}
      <div className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-red-500 mb-4">{user.name}</h2>
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-500" />
            <span>Email: {user.email}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-red-500" />
            <span>Phone: {user.phone}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaBuilding className="text-red-500" />
            <span>Company: {user.company.name}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaGlobe className="text-red-500" />
            <span>
              Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{user.website}</a>
            </span>
          </p>
        </div>
        <button
  onClick={() => navigate(-1)}
  className="flex items-center m-6 text-red-500 hover:text-red-300 transition-all ml-[180px] duration-200"
>
  <FaArrowLeft className="mr-2" />
  <p>Go Back</p>
</button>
      </div>
    </div>
  );
};

export default UserDetail;
