import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import MovieDetail from "./MovieDetail";

function User() {
  return (
    <div className="bg-black min-h-screen w-full h-auto">
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/contact" element={<Contact />} />   
        <Route path="/login" element={<Login />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default User;
