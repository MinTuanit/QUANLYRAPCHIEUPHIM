import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./Home";
import Contact from "./Contact";

function User() {
  return (
    <div className="bg-black min-h-screen w-full relative">
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default User;
