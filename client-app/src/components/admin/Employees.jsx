import React, { useState } from "react";
import Employee from "./items/Employee";
import SearchImg from "../../assets/images/search.svg";
import CalendarImg from "../../assets/images/calendar.svg";

const exampleEmployees = [
  {
    Id: 1,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 2,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 3,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 4,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 5,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 6,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 7,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 8,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 9,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 10,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 11,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 12,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 13,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 14,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 15,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 16,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 17,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 18,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 19,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 20,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 21,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 22,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 332,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 33,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 34,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 35,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 36,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 37,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 38,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 39,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 30,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 41,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 42,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 43,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 44,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 45,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 46,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 47,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 48,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 1,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 50,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 51,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 52,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 5,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 3,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 4,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 5,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 6,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 7,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 8,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 9,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 10,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 11,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 12,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 13,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 14,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 15,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 16,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 17,
    name: "Mia Davis",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 18,
    name: "Chris White",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 2,
    name: "John Doe",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
  {
    Id: 2,
    name: "Jane Smith",
    position: "Designer",
    shift: "Evening",
    birth: "01/01/2000",
  },
  {
    Id: 1,
    name: "Sam Johnson",
    position: "Manager",
    shift: "Night",
    birth: "01/01/2000",
  },
  {
    Id: 1,
    name: "Alex Brown",
    position: "Developer",
    shift: "Morning",
    birth: "01/01/2000",
  },
];

function Employees() {
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

  const handleDeleteClick = () => {
    alert("Delete Btn clicked");
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== "...") setCurrentPage(pageNumber);
  };

  const uniqueEmployees = exampleEmployees.filter(
    (employee, index, self) =>
      index === self.findIndex((e) => e.Id === employee.Id)
  );

  const filteredEmployees = uniqueEmployees.filter((employee) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (employee.name && employee.name.toLowerCase().includes(searchTermLower)) ||
      (employee.position && employee.position.toLowerCase().includes(searchTermLower)) ||
      (employee.department && employee.department.toLowerCase().includes(searchTermLower)) ||
      (employee.email && employee.email.toLowerCase().includes(searchTermLower)) ||
      (employee.phone && employee.phone.toLowerCase().includes(searchTermLower))
    );
  });

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
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
    <div className="employees flex flex-col w-[calc(100vw - 336px)] min-w-[1000px] max-w-[1200px] h-[100%] relative ">
      <div className="text-40px font-medium text-light-gray">Employees</div>
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
          className="DeleteBtn mt-2 ml-auto w-[114px] h-8 border-2 border-red text-red rounded-md items-center justify-center font-medium tracking-widest hover:bg-[#380005] duration-200"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="AddNewBtn mt-2 ml-5 w-[114px] h-8 border-2 border-red bg-red text-black rounded-md items-center justify-center font-medium tracking-widest hover:bg-dark-red hover:border-dark-red duration-200"
          onClick={handleAddNewClick}
        >
          Add New
        </button>
      </div>
      <div className="employees-list mt-3 h-full min-h-[568px] w-[calc(100vw - 336px)] bg-black rounded-xl overflow-auto">
        <div className="flex flex-row items-center text-light-gray text-sm font-medium px-8 pt-3 pb-4">
          <div className="w-[8%] text-base">ID</div>
          <div className="w-[24%] text-base">Name</div>
          <div className="w-[14%] text-base">Position</div>
          <div className="w-[12%] text-base">Shift</div>
          <div className="w-[22%] text-base">Birth</div>
          <div className="w-[20%] text-base">User Action</div>
        </div>
        <div className="border-b border-line-gray border-1.5" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="h-[45px] mb-[45px] ml-[10px] mr-[10px] bg-dark-gray" />
        <div className="-mt-[450px] text-base">
          {currentEmployees.map((employee) => (
            <Employee key={employee.Id} {...employee} />
          ))}
        </div>
        <div className="pagination-controls text-white absolute bottom-8 right-24 items-center justify-center">
          {currentPage > 1 && (
            <button
              className="pagination-btn right-56"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}
          <div className="absolute right-14 flex">
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
          </div>

          {currentPage < totalPages && (
            <button
              className="pagination-btn right-0"
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

export default Employees;
