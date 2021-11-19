import React, { useState, useEffect } from 'react';

import userApi from '../api/userAPI.js';

export const UserContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState({
    emial: 'twojemail@gmail.com',
    nick: 'twojnick123',
  });


  
  const handleLogin = async (values) => {
    await userApi
      .login(values)
      .then(({ data }) => {
        console.log(data)
      })
      .catch((error) => {
        setError(error.response.data);
        setOption(OPTION_TYPE.normal);
      });
  };

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
