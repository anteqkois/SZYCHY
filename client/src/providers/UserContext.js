import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const UserContext = React.createContext();

const initialUser = {
  email: '',
  password: '',
  nick: '',
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const history = useHistory();

  const handleLogin = async (values) => {
    await axios
      .post('/api/v1/auth/login', values)
      .then((data) => {
        setUser(data.data);
        sessionStorage.setItem('isLogined', true);
        history.push('/main');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = async () => {
    await axios
      .get('/api/v1/auth/logout')
      .then((data) => {
        setUser(initialUser);
        sessionStorage.setItem('isLogined', false);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignup = () => {};

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleLogout,
        handleSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
