import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import NotificationImg from "../../assets/images/notification.svg";
import ArrowDownImg from "../../assets/images/arrowDown.svg";

function UserHeader({ ProfileName, ProfilePic, className }) {
  const handleNotificationClick = () => {
    // alert("Notification clicked");
  };
  const handleArrowDownClick = () => {
    // alert("Arrow down clicked");
  };
  return (
    <header
      className={`header fixed top-0 left-0 z-[1000] w-[100vw] h-[60px] flex items-center p-4 ${className}`}
      style={{
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85))',
      }}
    >
      <Link to="/" className="logo pl-3 shrink-0 w-60">
        <img src={logo} alt="Clinic logo"
        style={{ filter: 'brightness(1.2)' }} />
      </Link>
      <div className="flex items-center space-x-6 overlow-hidden">
        <Link to="/user" className="text-white text-sm">Home</Link>
        <Link to="/user" className="text-white text-sm">Movies</Link>
        <Link to="/user" className="text-white text-sm">Contact</Link>
      </div>
      
      <div className="flex items-center ml-auto mr-6 w-[calc(100vw - 240px)] space-x-4 flex-shrink-0">
        <button
          className="header-notification hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleNotificationClick}
        >
          <img className="size-6" src={NotificationImg} alt="Notification" style={{ filter: 'invert(100%) brightness(200%)' }} />
        </button>
        <span className="profile-name text-light-gray text-sm">{ProfileName}</span>
        <img className="profile-pic size-8 rounded-[6px]" src={ProfilePic} />
        <button
          className="arrow-down hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleArrowDownClick}
        >
          <img  className="size-6" src={ArrowDownImg} alt="Arrow Down" style={{ filter: 'invert(100%) brightness(200%) constrast(200%)' }} />
        </button>
      </div>
    </header>
  );
}

export default UserHeader;
