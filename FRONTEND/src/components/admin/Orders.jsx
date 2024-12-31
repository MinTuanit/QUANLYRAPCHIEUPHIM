import React, { useState } from "react";
import Order from "./items/Order";
import SearchImg from "../../assets/images/search.svg";
import CalendarImg from "../../assets/images/calendar.svg";

const exampleOrders = [
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
  {
    Id: 11,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 12,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 13,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 14,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 15,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 16,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 17,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 18,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 19,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 20,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 21,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 22,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 23,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 24,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 25,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 26,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 27,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
  {
    Id: 28,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Popcorn",
    totalCost: "$20",
  },
  {
    Id: 29,
    date: "2021-10-15",
    movie: "The Matrix",
    showtime: "18:00",
    items: "Soda",
    totalCost: "$20",
  },
];

function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageRangeDisplayed = 5;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setCurrentPage(1);
  };

  const handleCalendarClick = () => {
    document.getElementById("date-picker").focus();
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== "...") setCurrentPage(pageNumber);
  };

  const uniqueOrders = exampleOrders.filter(
    (order, index, self) =>
      index === self.findIndex((r) => r.Id === order.Id)
  );

  const filteredOrders = uniqueOrders.filter((order) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (order.movie && order.movie.toLowerCase().includes(searchTermLower)) ||
      (order.customer && order.customer.toLowerCase().includes(searchTermLower)) ||
      (order.date && order.date.toLowerCase().includes(searchTermLower)) ||
      (order.amount && order.amount.toString().includes(searchTermLower))
    );
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(pageRangeDisplayed / 2)
    );
    const endPage = Math.min(totalPages, startPage + pageRangeDisplayed - 1);
    let i;
    for (i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    if (pageNumbers.length < pageRangeDisplayed && pageRangeDisplayed < totalPages) {
      if (startPage > 1)
        pageNumbers.unshift("...");
      else if (endPage < totalPages)
        pageNumbers.push("...");
    }
    return pageNumbers;
  };

  return (
    <div className="orders flex flex-col w-[calc(100vw - 336px)] min-w-[1000px] max-w-[1200px] h-[100%] relative ">
      <div className="text-40px font-medium text-light-gray">Orders</div>
      <div className="flex flex-row items-center">
        <div className="SearchBar relative w-full max-w-[240px] h-8 mt-2">
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
        <div className="DateFilterBar relative ml-5 w-full max-w-[240px] h-8 mt-2">
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
          className="AddNewBtn mt-2 ml-5 w-[114px] h-8 border-2 border-red bg-red text-black rounded-md items-center justify-center font-medium tracking-widest hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleAddNewClick}
        >
          Add New
        </button>
      </div>
      <div className="orders-list relative mt-3 h-full min-h-[568px] w-[calc(100vw - 336px)] bg-black rounded-xl overflow-auto">
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
          {currentOrders.map((order) => (
            <Order key={order.Id} order={order} />
          ))}
        </div>
        <div className="pagination-controls absolute bottom-5 right-36 text-white">
          {currentPage > 1 && (
            <button
              className="pagination-btn absolute right-[164px] text-gray font-semibold"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`page-number-btn ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="pagination-btn absolute -right-14 text-gray font-semibold"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
