import React from 'react';

function NavigationBar({ topChildren, botChildren, notificationChildren }) {
  
  const handleClick = (title) => {
    alert(`Clicked on ${title}`);
  };

  return (
    <div className="h-[calc(100vh-74px)] w-60 flex flex-col items-start relative bg-black">
      <div className="border-l border-line-gray absolute left-60 h-full" />
      <div className="relative flex flex-col py-6 pl-[28px] w-full box-border overflow-hidden h-[54%]">
        {topChildren}
      </div>
      <div className="border-t border-line-gray w-184 self-center" />
      <div className="notification-box relative flex justify-center items-center w-full h-[26%]">
        {notificationChildren}
      </div>
      <div className="relative flex flex-col py-6 pl-[28px] w-full box-border overflow-hidden h-[20%]">
        {botChildren}
      </div>     
    </div>
  );
}
export default NavigationBar;
