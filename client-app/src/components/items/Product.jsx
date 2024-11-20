import React from "react";

function Product({ icon, title, description, price, type }) {
  return (
    <div className="product w-[140px] h-[200px]">
      <div className="product-img flex w-[130px] h-[150px] border-2 border-red rounded-xl items-center justify-center bg-gradient-to-b from-black to-[#290002] p-2">
        <img className="max-h-[100px] max-w-[100px]" src={icon} alt={title} />
      </div>
      <div className="product-info flex flex-col mt-1">
        <p className="text-[13px] font-normal text-white tracking-wider truncate">
          {title}
        </p>
        {description && (
          <p className="text-[11px] font-normal text-white tracking-wider truncate">
            {description}
          </p>
        )}
        <p className="text-[11px] font-light text-gray tracking-wider truncate">
          {price}
        </p>
      </div>
    </div>
  );
}

export default Product;
