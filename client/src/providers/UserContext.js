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
        sessionStorage.setItem('nick', data.data.nick);
        history.push('/post');
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
        sessionStorage.removeItem('isLogined');
        sessionStorage.removeItem('nick');
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignup = async (values) => {
    try {
      await axios
        .post('/api/v1/auth/signup', values)
        .then((data) => {
          history.push('/');
        })
    } catch (err) {
      return err.response.data.errors;
    }
  };

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
