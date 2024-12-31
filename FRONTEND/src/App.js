import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Navigate,
} from "react-router-dom";
import Admin from "./components/admin/admin";
import User from "./components/user/user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/user/*" element={<User />} />
    </Routes>
  );
}

export default App;
