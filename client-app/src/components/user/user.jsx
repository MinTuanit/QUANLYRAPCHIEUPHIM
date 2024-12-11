import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./Home";

function User() {
  return (
    <div className="bg-black min-h-screen w-full relative">
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default User;
