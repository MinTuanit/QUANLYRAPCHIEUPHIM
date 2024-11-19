import { useState } from "react";
import Movie from "./items/Movie";
import agentMovieImg from "../assets/images/examples/agentMovie.svg";
import avatarMovieImg from "../assets/images/examples/avatarMovie.svg";
import jokerMovieImg from "../assets/images/examples/jokerMovie.svg";
import endgameMovieImg from "../assets/images/examples/endgameMovie.svg";
import screamMovieImg from "../assets/images/examples/screamMovie.svg";
import titanicMovieImg from "../assets/images/examples/titanicMovie.svg";
import barbieMovieImg from "../assets/images/examples/barbieMovie.svg";
import batmanMovieImg from "../assets/images/examples/batmanMovie.svg";
import shangchiMovieImg from "../assets/images/examples/shangchiMovie.svg";
import notimeMovieImg from "../assets/images/examples/notimeMovie.svg";
import SearchImg from "../assets/images/search.svg";
import CalendarImg from "../assets/images/calendar.svg";
import addImg from "../assets/images/add.svg";

const exampleMovies = [
  {
    poster: agentMovieImg,
    name: "Agent",
    year: "2021",
    status: "Unknown",
  },
  {
    poster: avatarMovieImg,
    name: "Avatar",
    year: "2009",
    status: "Coming Soon",
  },
  {
    poster: jokerMovieImg,
    name: "Joker",
    year: "2019",
    status: "Now Playing",
  },
  {
    poster: endgameMovieImg,
    name: "Avengers: Endgame",
    year: "2019",
    status: "Now Playing",
  },
  {
    poster: screamMovieImg,
    name: "Scream",
    year: "2022",
    status: "Coming Soon",
  },
  {
    poster: titanicMovieImg,
    name: "Titanic",
    year: "1997",
    status: "Stopped",
  },
  {
    poster: barbieMovieImg,
    name: "Barbie",
    year: "2023",
    status: "Coming Soon",
  },
  {
    poster: batmanMovieImg,
    name: "Batman",
    year: "2022",
    status: "Now Playing",
  },
  {
    poster: shangchiMovieImg,
    name: "Shang-Chi: The Legend of the Ten Rings",
    year: "2021",
    status: "Now Playing",
  },
  {
    poster: notimeMovieImg,
    name: "No Time To Die",
    year: "2021",
    status: "Now Playing",
  },{
    poster: agentMovieImg,
    name: "Agent",
    year: "2021",
    status: "Unknown",
  },
  {
    poster: avatarMovieImg,
    name: "Avatar",
    year: "2009",
    status: "Coming Soon",
  },
  {
    poster: jokerMovieImg,
    name: "Joker",
    year: "2019",
    status: "Now Playing",
  },
  {
    poster: endgameMovieImg,
    name: "Avengers: Endgame",
    year: "2019",
    status: "Now Playing",
  },
  {
    poster: screamMovieImg,
    name: "Scream",
    year: "2022",
    status: "Coming Soon",
  },
  {
    poster: titanicMovieImg,
    name: "Titanic",
    year: "1997",
    status: "Stopped",
  },
  {
    poster: barbieMovieImg,
    name: "Barbie",
    year: "2023",
    status: "Coming Soon",
  },
  {
    poster: batmanMovieImg,
    name: "Batman",
    year: "2022",
    status: "Now Playing",
  },
  {
    poster: shangchiMovieImg,
    name: "Shang-Chi: The Legend of the Ten Rings",
    year: "2021",
    status: "Now Playing",
  },
  {
    poster: notimeMovieImg,
    name: "No Time To Die",
    year: "2021",
    status: "Now Playing",
  },
];

function Movies() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredMovies = exampleMovies.filter((movie) => {
    const matchesTab = activeTab === "All" || movie.status === activeTab;
    const matchesSearch = movie.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });
  return (
    <div className="movies flex flex-col h-full">
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
      <div className="content flex -mt-[2px] w-full h-full bg-black border-[3px] border-line-gray rounded-b-xl rounded-tr-xl rounded-tl-none pl-12 py-6 pr-4 overflow-auto">
        <div className="list flex-1 grid grid-cols-6 gap-y-8 max-h-[510px] py-3 overflow-y-auto">
          {filteredMovies.map((movie, index) => (
            <Movie key={index} {...movie} />
          ))}
        </div>
        <button
          className="fixed bottom-10 right-16 size-11 rounded-2xl bg-red hover:bg-dark-red duration-200"
          onClick={handleAddNewClick}
        >
          <img className="size-11" src={addImg} alt="Add New" />
        </button>
      </div>
    </div>
  );
}

export default Movies;
