import React from "react";

function NavSelection({ icon, title, onClick }) {
  const handleClick = () => {
    alert(`You clicked on ${title}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="nav-selection w-184 h-46 flex items-center transition-transform duration-50"
      onClick={handleClick}
    >
      <img className="size-6" src={icon} alt="Selection icon" />
      <span className="text-gray font-medium ml-3.5 hover:text-light-gray">{title}</span>
    </button>
  );
}

export default NavSelection;
