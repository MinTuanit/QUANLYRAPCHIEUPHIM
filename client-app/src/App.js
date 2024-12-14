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
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/user/*" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;


