import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-all cursor-pointer"
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};

export default UserCard;
