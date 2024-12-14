import React, { createContext, useState } from 'react';
import ProfileImg from './assets/images/profile.png';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: '', picture: '' });

  const handleLogin = (profile) => {
    setIsLoggedIn(true);
    // setUserProfile(profile);
    setUserProfile({ name: 'Nguyen Van A', picture: ProfileImg });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile({ name: '', picture: '' });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userProfile, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};