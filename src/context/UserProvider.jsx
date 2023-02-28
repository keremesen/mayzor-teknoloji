import React, { useState } from 'react';
import UserContext from './UserContext';
import data from "../data/data"

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(data);

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? updatedUser : user));
  };

  return (
    <UserContext.Provider value={{ users, setUsers, deleteUser,updateUser  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
