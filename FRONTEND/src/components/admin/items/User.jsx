import React from "react";
import DeleteImg from "../../../assets/images/delete.svg";
import InfoImg from "../../../assets/images/info.svg";

function User({ user }) {
  return (
    <div
      className="user grid grid-cols-6 h-[45px] px-8 text-gray items-center hover:text-red"
      style={{ gridTemplateColumns: "0.4fr 1.2fr 0.7fr 0.6fr 1.1fr 1fr" }}
    >
      <p className="text-sm font-normal">{user?.Id}</p>
      <p className="text-sm font-normal">{user?.name}</p>
      <p className="text-sm font-normal">{user?.position}</p>
      <p className="text-sm font-normal">{user?.shift}</p>
      <p className="text-sm font-normal">{user?.birth}</p>
      <div className="flex flex-row">
        <button className="info-btn hover:transform hover:-translate-y-1 transition-transform duration-200" onClick={{}}>
        <img
          src={InfoImg}
          alt="Info"
          className="w-6 h-6 hover:filter-hover"
        />
        </button>
        <button className="delete-btn ml-2 hover:transform hover:-translate-y-1 transition-transform duration-200" onClick={{}}>
        <img
          src={DeleteImg}
          alt="Delete"
          className="w-6 h-6 hover:filter-hover"
        />
      </button>
      </div>
      
    </div>
  );
}

export default User;
