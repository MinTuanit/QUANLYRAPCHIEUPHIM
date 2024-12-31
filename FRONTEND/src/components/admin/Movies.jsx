import { useState, useEffect } from "react";
import Movie from "./items/Movie";
import SearchImg from "../../assets/images/search.svg";
import CalendarImg from "../../assets/images/calendar.svg";
import addImg from "../../assets/images/add.svg";
import axios from "axios";


function Movies() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await axios.get('https://localhost:44345/api/Movies');
  //       setMovies(response.data);
  //     } catch (error) {
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCalendarClick = () => {
    document.getElementById("date-picker").focus();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTab = activeTab === "All" || movie.status === activeTab;
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch =
      (movie.name && movie.name.toLowerCase().includes(searchTermLower)) ||
      (movie.status && movie.status.toLowerCase().includes(searchTermLower)) ||
      (movie.year && movie.year.toString().includes(searchTermLower)) ||
      (movie.description && movie.description.toLowerCase().includes(searchTermLower));
    return matchesTab && matchesSearch;
  });
  
  return (
    <div className="movies flex flex-col h-[673px]">
      <div className="text-40px font-medium text-light-gray">Movies</div>
      <div className="movie-tabs flex mt-4 z-20 text-light-gray">
        <button
          className={`tab ${activeTab === "All" ? "active" : ""}`}
          onClick={() => handleTabClick("All")}
        >
          <span>All</span>
        </button>
        <button
          className={`tab ${activeTab === "Now Playing" ? "active" : ""}`}
          onClick={() => handleTabClick("Now Playing")}
        >
          <span>Now Playing</span>
        </button>
        <button
          className={`tab ${activeTab === "Coming Soon" ? "active" : ""}`}
          onClick={() => handleTabClick("Coming Soon")}
        >
          <span>Coming Soon</span>
        </button>
        <button
          className={`tab ${activeTab === "Stopped" ? "active" : ""}`}
          onClick={() => handleTabClick("Stopped")}
        >
          <span>Stopped</span>
        </button>
        <div className="DateFilterBar relative ml-auto w-full max-w-[240px] h-8 -mt-2">
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
        <div className="SearchBar relative ml-5 w-full max-w-[240px] h-8 -mt-2">
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
      </div>
      <div className="content relative -mt-[3px] w-full h-full bg-black border-[3px] border-line-gray rounded-b-xl rounded-tr-xl rounded-tl-none pl-12 py-6 pr-4 overflow-auto">
        <div className="list flex-1 grid grid-cols-6 gap-y-8 max-h-[510px] py-3 overflow-y-auto">
          {filteredMovies.map((movie, index) => (
            <Movie key={index} {...movie} />
          ))}
        </div>
        <button
          className="absolute bottom-6 right-9 size-11 rounded-2xl bg-red hover:bg-dark-red duration-200"
          onClick={handleAddNewClick}
        >
          <img className="size-11" src={addImg} alt="Add New" />
        </button>
      </div>
    </div>
  );
}

export default Movies;
