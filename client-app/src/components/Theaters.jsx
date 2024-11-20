import { useState } from "react";
import Theater from "./items/Theater";
import SearchImg from "../assets/images/search.svg";
import addImg from "../assets/images/add.svg";

const exampleTheaters = [
  {
    id: "T01",
    status: "Ready",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T02",
    status: "Ready",
    capacity: "200",
    playing: "Joker",
  },
  {
    id: "T03",
    status: "Playing",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T04",
    status: "Repairing",
    capacity: "100",
    playing: "none",
  },
  {
    id: "T05",
    status: "Playing",
    capacity: "200",
    playing: "No Time To Die",
  },
  {
    id: "T06",
    status: "Ready",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T07",
    status: "Ready",
    capacity: "200",
    playing: "Joker",
  },
  {
    id: "T08",
    status: "Playing",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T09",
    status: "Repairing",
    capacity: "100",
    playing: "none",
  },
  {
    id: "T10",
    status: "Playing",
    capacity: "200",
    playing: "No Time To Die",
  },
  {
    id: "T01",
    status: "Ready",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T02",
    status: "Ready",
    capacity: "200",
    playing: "Joker",
  },
  {
    id: "T03",
    status: "Playing",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T04",
    status: "Repairing",
    capacity: "100",
    playing: "none",
  },
  {
    id: "T05",
    status: "Playing",
    capacity: "200",
    playing: "No Time To Die",
  },
  {
    id: "T06",
    status: "Ready",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T07",
    status: "Ready",
    capacity: "200",
    playing: "Joker",
  },
  {
    id: "T08",
    status: "Playing",
    capacity: "150",
    playing: "Shang-Chi: The Legend of the Ten Rings",
  },
  {
    id: "T09",
    status: "Repairing",
    capacity: "100",
    playing: "none",
  },
  {
    id: "T10",
    status: "Playing",
    capacity: "200",
    playing: "No Time To Die",
  },
];

function Theaters() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteClick = () => {
    alert("Delete Btn clicked");
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const filteredTheaters = exampleTheaters.filter((theater) => {
    return theater.id.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className="Theaters flex flex-col h-full">
      <div className="text-40px font-medium text-light-gray">Theaters</div>
      <div className="flex flex-row items-center mt-4">
        <div className="SearchBar relative w-full max-w-[240px] h-8">
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
        <button
          className="DeleteBtn ml-auto w-[114px] h-8 border-2 border-red text-red rounded-md items-center justify-center font-medium tracking-widest hover:bg-[#380005] duration-200"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="AddNewBtn ml-5 w-[114px] h-8 border-2 border-red bg-red text-black rounded-md items-center justify-center font-medium tracking-widest hover:bg-dark-red hover:border-dark-red duration-200"
          onClick={handleAddNewClick}
        >
          Add New
        </button>
      </div>

      <div className="content mt-[14px] w-full h-full bg-black border-[3px] border-line-gray rounded-xl pl-12 py-6 pr-4 overflow-auto">
        <div className="list grid grid-cols-5 gap-x-6 gap-y-8 max-h-[490px] py-3 overflow-y-auto">
          {filteredTheaters.map((theater, index) => (
            <Theater key={index} {...theater} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Theaters;
