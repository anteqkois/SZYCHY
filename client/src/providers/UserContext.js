import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleLogin = async (values) => {
    await axios
      .post('/api/v1/auth/login', values)
      .then((data) => {
        setUser(data.data);
        sessionStorage.setItem('isLogined', true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(user);
  }, []);

  const handleLogut = () => {};

  const handleSignup = () => {};

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleLogut,
        handleSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
