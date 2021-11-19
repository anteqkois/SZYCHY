import React, { useState, useEffect } from 'react';
import { DarkTheme, LightTheme } from '../layouts/theme';

export const UserContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState({
    emial: 'email',
    nick: 'nickl'
  });

  const handleLogin = () =>{
    
  }
  
    const handleLogut= () =>{
  
    }

  const handleSignup= () =>{

  }


  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
