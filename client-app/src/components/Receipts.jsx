import React, { useState } from "react";
import Receipt from "./items/Receipt";
import SearchImg from "../assets/images/search.svg";
import CalendarImg from "../assets/images/calendar.svg";

const exampleReceipts = [
  {
    Id: 1,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Snack, Soda, Tea",
    totalCost: "$20",
  },
  {
    Id: 2,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Popcorn, Soda",
    totalCost: "$20",
  },
  {
    Id: 3,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Snack, Soda",
    totalCost: "$20",
  },
  {
    Id: 4,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Popcorn, Soda",
    totalCost: "$20",
  },
  {
    Id: 5,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Soda, Lays",
    totalCost: "$20",
  },
  {
    Id: 6,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 7,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Popcorn, Soda",
    totalCost: "$20",
  },
  {
    Id: 8,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Tickets, Soda",
    totalCost: "$20",
  },
  {
    Id: 9,
    date: "2021-09-15",
    movie: "The Matrix",
    showtime: "15:00",
    items: "Lays, Soda",
    totalCost: "$20",
  },
  {
    Id: 10,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
];

function Receipts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCalendarClick = () => {
    document.getElementById("date-picker").focus();
  };

  const handleDeleteClick = () => {
    alert("Delete Btn clicked");
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const filteredReceipts = exampleReceipts.filter((receipt) =>
    receipt.movie.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="receipts flex flex-col h-full">
      <div className="text-40px font-medium text-light-gray">Receipts</div>
      <div className="flex flex-row items-center">
        <div className="SearchBar relative w-full max-w-[240px] h-8 mt-4">
          <input
            type="text"
            className="size-full pl-10 pr-5 text-sm text-gray rounded-full text-gray-700 bg-black border-line-gray border-2 focus:outline-none focus:ring-1"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img
            src={SearchImg}
            alt="Search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
        <div className="DateFilterBar relative ml-5 w-full max-w-[240px] h-8 mt-4">
          <input
            type="date"
            id="date-picker"
            className="w-full h-full pr-5 pl-10 text-sm text-red rounded-full text-gray-700 bg-black border-red border-2 focus:outline-none focus:ring-1"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <img
            src={CalendarImg}
            alt="Calendar"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
            style={{
              filter:
                "invert(10%) sepia(88%) saturate(6604%) hue-rotate(352deg) brightness(73%) contrast(105%)",
            }}
            onClick={handleCalendarClick}
          />
        </div>
        <button
          className="DeleteBtn mt-4 ml-auto w-[114px] h-8 border-2 border-red text-red rounded-md items-center justify-center font-medium tracking-widest hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="AddNewBtn mt-4 ml-5 w-[114px] h-8 border-2 border-red bg-red text-black rounded-md items-center justify-center font-medium tracking-widest hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleAddNewClick}
        >
          Add New
        </button>
      </div>
      <div className="receipts-list mt-3 h-full w-full bg-black rounded-xl overflow-auto">
        <div className="flex flex-row items-center text-light-gray text-sm font-medium px-8 pt-3 pb-4">
          <div className="w-[14%] text-base">ID</div>
          <div className="w-[16%] text-base">Date</div>
          <div className="w-[14%] text-base">Movie</div>
          <div className="w-[14%] text-base">Showtime</div>
          <div className="w-[14%] text-base">Items</div>
          <div className="w-[14%] text-base">Total cost</div>
          <div className="w-[14%] text-base">Use Action</div>
        </div>
        <div className="border-b border-line-gray border-1.5" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="-mt-[450px] text-base">
          {exampleReceipts.map((receipt) => (
            <Receipt
              key={receipt.Id}
              Id={receipt.Id}
              date={receipt.date}
              movie={receipt.movie}
              showtime={receipt.showtime}
              items={receipt.items}
              totalCost={receipt.totalCost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receipts;
