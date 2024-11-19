import React from "react";
import { Link } from "react-router-dom";

function NavSelection({ icon, title, to }) {
  return (
    <Link to={to} className="nav-selection w-46 h-[46px] flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
      <img src={icon} alt={title} className="w-6 h-6" />
      <span className="text-gray font-medium pl-2">{title}</span>
    </Link>
  );
}

export default NavSelection;