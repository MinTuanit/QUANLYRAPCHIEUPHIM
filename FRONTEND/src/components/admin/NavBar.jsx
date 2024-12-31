import React from 'react';

function NavigationBar({ topChildren, botChildren, notificationChildren }) {
  
  const handleClick = (title) => {
    alert(`Clicked on ${title}`);
  };

  return (
    <div className="fixed top-[50px] left-0 z-[999] h-[calc(100vh-50px)] w-[220px] flex flex-col items-start bg-black">
      <div className="border-l-[2px] border-line-gray absolute left-[220px] h-full" />
      <div className="relative flex flex-col py-3 pl-[20px] w-full box-border overflow-hidden h-[62%] min-h-[316px]">
        {topChildren}
      </div>
      <div className="border-t border-line-gray w-[210px] self-center" />
      <div className="notification-box relative flex justify-center items-center w-full h-[24%]">
        {notificationChildren}
      </div>
      <div className="relative flex flex-col py-2 pl-[28px] w-full box-border overflow-hidden h-[14%] min-h-[100px]">
        {botChildren}
        <div className="w-[200px] self-center text-sm text-line-gray font-light">Developed by Group 7</div>
      </div>     
    </div>
  );
}
export default NavigationBar;
