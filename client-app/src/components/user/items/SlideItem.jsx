import React from "react";

function SlideItem({ poster, name, duration, category }) {
  return (
    <div className="slide-item relative flex-shrink-0 w-[234px] h-[130px] rounded-md">
      <img
        className="slide-item-poster h-full w-full object-cover rounded-md transition-transform duration-300"
        src={poster}
        alt={`${name} poster`}
      />
      <div className="slide-item-info absolute inset-0 top-[130px] left-0 w-full h-[50px] bg-dark-gray opacity-0 text-white flex flex-col justify-center px-2">
        <div className="text-sm font-medium">{name}</div>
        <div className="flex flex-row space-x-4">
          <div className="text-xs">{duration}</div>
          <div className="text-xs">{category}</div>
        </div>
      </div>
    </div>
  );
}
export default SlideItem;
