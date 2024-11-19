import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import NotificationImg from "../assets/images/notification.svg";
import MessageImg from "../assets/images/messageQuestion.svg";
import CalendarImg from "../assets/images/calendar.svg";
import ArrowDownImg from "../assets/images/arrowDown.svg";

function Header({ProfileName, ProfileRole, ProfilePic, className}) {
  const handleCalendarClick = () => {
    alert("Calendar clicked");
  };
  const handleMessageClick = () => {
    alert("Message clicked");
  };
  const handleNotificationClick = () => {
    alert("Notification clicked");
  }
  const handleArrowDownClick = () => {
    alert("Arrow down clicked");
  };
  return (
    <header className={`header bg-black w-full h-70 flex items-center p-4 border-b border-line-gray ${className}`}>
      <Link to="/" className="logo pl-3">
        <img src={logo} alt="Clinic logo" />
      </Link>
      <div className="border-l border-line-gray absolute left-60 h-70" />
      <div className="flex items-center ml-auto pr-10 space-x-4">
        <div className="space-x-4 mr-6">
          <button className="header-calendar hover:transform hover:-translate-y-1 transition-transform duration-200" onClick={handleCalendarClick}>
            <img className="size-6" src={CalendarImg} alt="Calendar" />
          </button>
          <button className="header-message hover:transform hover:-translate-y-1 transition-transform duration-200" onClick={handleMessageClick}>
            <img className="size-6" src={MessageImg} alt="Message" />
          </button>
          <button className="header-notification hover:transform hover:-translate-y-1 transition-transform duration-200" onClick={handleNotificationClick}>
            <img className="size-6" src={NotificationImg} alt="Notification" />
          </button>
        </div>
        <div className="flex">
          <div className="profile-info flex flex-col text-right leading-snug">
            <span className="profile-name text-light-gray">{ProfileName}</span>
            <span className="profile-role text-gray text-14px">{ProfileRole}</span>
          </div>
        </div>
        <img className="profile-pic size-10 rounded-full" src={ProfilePic} />
        <button className="arrow-down hover:transform hover:-translate-y-1 transition-transform duration-200" onClick={handleArrowDownClick}>
            <img src={ArrowDownImg} alt="Arrow Down" />
        </button>
      </div>
    </header>
  );
}

export default Header;