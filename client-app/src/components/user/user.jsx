import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./Home";
import Contact from "./Contact";
import Login from "./Login";

function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: '', picture: '' });
  const handleLogin = (profile) => {
    setIsLoggedIn(true);
    setUserProfile(profile);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile({ name: '', picture: '' });
  };

  return (
    <div className="bg-black min-h-screen w-full h-auto">
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/home" element={<UserHome isLoggedIn={isLoggedIn} userProfile={userProfile} />} />
        <Route path="/contact" element={<Contact />} />   
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
      </Routes>
    </div>
  );
}

export default User;
