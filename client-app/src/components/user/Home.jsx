import React, { useState, useRef, useContext } from "react";
import UserHeader from "./Header";
import backgroundVideo from "./../../assets/videos/EndgameTrailer.mp4";
import MovieSlide from "./MovieSlide";
import MuteImg from "./../../assets/images/mute.png";
import UnmuteImg from "./../../assets/images/unmute.png";
import Footer from "./Footer";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

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
        <Card sx={{ maxWidth: 400, position: 'relative', zIndex: 30, marginTop: '100px', marginLeft: '100px', backgroundColor: 'rgba(0,0,0,0.75)', flexShrink: 0 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="white" fontStyle={{fontWeight: '600'}}>
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
            <Button variant="contained" size="medium" onClick={handleBuyTicketClicked}>Book Ticket</Button>
            <Button variant="contained" size="medium" onClick={handleBuyTicketClicked}>Learn More</Button>
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
          <MovieSlide title="New movies" />
          <MovieSlide title="Most Viewed" />
          <MovieSlide title="Up Coming" />
        </div>
      </div>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </div>
  );
}
export default UserHome;
