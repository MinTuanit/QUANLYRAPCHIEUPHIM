import React from "react";
import DeleteImg from "../../../assets/images/delete.svg";
import InfoImg from "../../../assets/images/info.svg";

function Order({ order }) {
  return (
    <div
      className="order grid grid-cols-6 h-[45px] px-8 text-gray items-center hover:text-red"
      style={{ gridTemplateColumns: "1.4fr 1.6fr 1.4fr 1.4fr 1.4fr 1.4fr 1.4fr" }}
    >
      <p className="text-sm font-normal">{order?.Id}</p>
      <p className="text-sm font-normal">{order?.date}</p>
      <p className="text-sm font-normal">{order?.movie}</p>
      <p className="text-sm font-normal">{order?.showtime}</p>
      <p className="text-sm font-normal">{order?.items}</p>
      <p className="text-sm font-normal">{order?.totalCost}</p>
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

export default Order;
