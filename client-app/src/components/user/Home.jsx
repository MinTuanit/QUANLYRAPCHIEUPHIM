import React, { useState, useRef, useContext } from "react";
import UserHeader from "./Header";
import backgroundVideo from "./../../assets/videos/EndgameTrailer.mp4";
import MovieSlide from "./MovieSlide";
import MuteImg from "./../../assets/images/mute.png";
import UnmuteImg from "./../../assets/images/unmute.png";
import Footer from "./Footer";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { keyframes } from "@emotion/react";
function UserHome() {
  const navigate = useNavigate();
  const handleBuyTicketClicked = () => {
    navigate("/user/movie-detail");
  };

  const { isLoggedIn, userProfile } = useContext(AuthContext);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const demoMovie = {
    title: "Avengers: Endgame",
    genre: "Action, Adventure, Drama",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    rating: "8.4",
    duration: "3h 1m",
    year: "2019",
  };
  return (
    <div className="bg-black min-h-screen w-full h-[3000px] relative">
      <div className="absolute top-0 left-0 w-full">
        <div
          className="absolute top-0 left-0 w-full h-[200px] z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
          }}
        />
        <UserHeader />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          className="absolute top-0 left-0 w-full h-[580px] object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          <span className="text-white">
            Your browser does not support the video tag.
          </span>
        </video>
        /* Title and Play Button */
        <Card
          sx={{
            maxWidth: 400,
            position: "relative",
            zIndex: 30,
            marginTop: "100px",
            marginLeft: "100px",
            backgroundColor: "rgba(0,0,0,0.75)",
            flexShrink: 0,
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="white"
              fontStyle={{ fontWeight: "600" }}
            >
              {demoMovie.title}
            </Typography>
            <Typography variant="body2" color="gray">
              Gerne: {demoMovie.genre}
            </Typography>
            <Typography variant="body2" color="gray">
              Duration: {demoMovie.duration}
            </Typography>
            <Typography variant="body2" color="gray" margin={2}>
              Description: {demoMovie.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ marginBottom: 2, marginLeft: 2 }}>
            <Button
              variant="contained"
              size="medium"
              onClick={handleBuyTicketClicked}
            >
              Book Ticket
            </Button>
            <Button
              variant="contained"
              size="medium"
              onClick={handleBuyTicketClicked}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
        <button
          onClick={toggleMute}
          className="absolute top-[480px] right-12 border-gray border-2 bg-[rgba(0,0,0,0.2)] rounded-full z-30 p-2"
        >
          <img
            src={isMuted ? MuteImg : UnmuteImg}
            alt={isMuted ? "Unmute" : "Mute"}
            className="w-6 h-6 filter invert"
          />
        </button>
        <div
          className="absolute top-[380px] left-0 w-full h-[200px] z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
          }}
        />
        <div className="absolute space-y-32 w-full top-[550px] px-5 z-30">
          <MovieSlide title="Now Showing" />
          <MovieSlide title="Up Coming" />
          <MovieSlide title="All" />
        </div>
      </div>
      <QuickBook />
      <Footer className="absolute bottom-0 left-0 w-full" />
    </div>
  );
}
export default UserHome;

function QuickBook() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const renderArrow = () => {
    return <KeyboardArrowDownIcon sx={{ color: "#999999", mr: 1 }} />;
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "black",
        color: "white",
        "& .MuiMenuItem-root": { opacity: 0.5 },
      },
    },
  };

  const allSelected = selectedMovie && selectedDate && selectedTime;

  const shake = keyframes`
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-10px); }
    50% { transform: translateY(10px); }
    75% { transform: translateY(-10px); }
  `;
  return (
    <div className="w-full px-[8%] h-[100px] absolute top-[2500px] z-30">
      <div
        className={`h-full w-full rounded-lg border-[3px] border-[#b80007] flex flex-row items-center justify-between p-4 transition-all duration-500 ${
          allSelected
            ? "bg-primary-main border-primary-main scale-105"
            : "bg-black border-[#b80007]"
        }`}
      >
        <div className="text-white text-3xl ml-2 mr-8 font-semibold font-['Roboto']">
          QUICK BOOK
        </div>
        <FormControl variant="outlined" sx={{ width: 214 }}>
          <Select
            value={selectedMovie}
            onChange={handleMovieChange}
            displayEmpty
            IconComponent={renderArrow}
            MenuProps={menuProps}
            sx={{
              height: "50px",
              color: selectedMovie ? "black" : "#999999",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: selectedMovie ? "primary.main" : "#111",
              border: selectedMovie ? "" : "2px solid #b80007",
              "& .MuiSelect-select": {
                color: selectedMovie ? "black" : "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>Select Movie</em>
            </MenuItem>
            <MenuItem value="Movie1">Movie 1</MenuItem>
            <MenuItem value="Movie2">Movie 2</MenuItem>
            <MenuItem value="Movie3">Movie 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: 214 }}>
          <Select
            value={selectedDate}
            onChange={handleDateChange}
            displayEmpty
            IconComponent={renderArrow}
            MenuProps={menuProps}
            sx={{
              height: "50px",
              color: selectedDate ? "black" : "#999999",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: selectedDate ? "primary.main" : "#111",
              border: selectedDate ? "" : "2px solid #b80007",
              "& .MuiSelect-select": {
                color: selectedDate ? "black" : "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>Select Date</em>
            </MenuItem>
            <MenuItem value="2024-12-14">14/12/2024</MenuItem>
            <MenuItem value="2024-12-15">15/12/2024</MenuItem>
            <MenuItem value="2024-12-16">16/12/2024</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: 214 }}>
          <Select
            value={selectedTime}
            onChange={handleTimeChange}
            displayEmpty
            IconComponent={renderArrow}
            MenuProps={menuProps}
            sx={{
              height: "50px",
              color: selectedTime ? "black" : "#999999",
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: selectedTime ? "primary.main" : "#111",
              border: selectedTime ? "" : "2px solid #b80007",
              "& .MuiSelect-select": {
                color: selectedTime ? "black" : "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>Select Time</em>
            </MenuItem>
            <MenuItem value="10:00">10:00</MenuItem>
            <MenuItem value="13:00">13:00</MenuItem>
            <MenuItem value="16:20">16:20</MenuItem>
          </Select>
        </FormControl>
        <Button
           sx={{
            height: '50px',
            width: '180px',
            marginRight: 1,
            animation: allSelected ? `${shake} 0.5s ease-in-out` : 'none',
            backgroundColor: allSelected ? 'secondary.main' : 'primary.main',
            transition: 'background-color 0.5s ease-in-out',
          }}
          variant="contained"
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            BOOKING
          </Typography>
        </Button>
      </div>
    </div>
  );
}
