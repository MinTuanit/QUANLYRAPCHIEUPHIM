import { useState } from "react";
import Room from "./items/Room";
import SearchImg from "../../assets/images/search.svg";
import addImg from "../../assets/images/add.svg";

const exampleRooms = [
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

function Rooms() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const filteredRooms = exampleRooms.filter((room) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (room.id && room.id.toLowerCase().includes(searchTermLower)) ||
      (room.name && room.name.toLowerCase().includes(searchTermLower)) ||
      (room.location && room.location.toLowerCase().includes(searchTermLower)) ||
      (room.capacity && room.capacity.toString().includes(searchTermLower))
    );
  });
  
  return (
    <div className="rooms flex flex-col h-[665px]">
      <div className="text-40px font-medium text-light-gray">Rooms</div>
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
          className="AddNewBtn ml-5 w-[114px] h-8 border-2 border-red bg-red text-black rounded-md items-center justify-center font-medium tracking-widest hover:bg-dark-red hover:border-dark-red duration-200"
          onClick={handleAddNewClick}
        >
          Add New
        </button>
      </div>

      <div className="content mt-[14px] w-full h-full bg-black border-[3px] border-line-gray rounded-xl pl-12 py-6 pr-4 overflow-auto">
        <div className="list grid grid-cols-5 gap-x-6 gap-y-8 max-h-[490px] py-3 overflow-y-auto">
          {filteredRooms.map((room, index) => (
            <Room key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Rooms;
