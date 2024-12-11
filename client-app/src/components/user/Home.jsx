import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./Header";
import ProfileImg from "./../../assets/images/profile.png";
import backgroundVideo from "./../../assets/videos/EndgameTrailer.mp4";
import MovieSlide from "./MovieSlide";
import MuteImg from "./../../assets/images/mute.png";
import UnmuteImg from "./../../assets/images/unmute.png";
import Footer from "./Footer";

function UserHome() {
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
    <div className="bg-black min-h-screen w-full h-[1500px] relative">
      <div className="absolute top-0 left-0 w-full">
        <div
          className="absolute top-0 left-0 w-full h-[200px] z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
          }}
        />
        <UserHeader ProfileName={"Nguyen Van A"} ProfilePic={ProfileImg} />
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
        <div className="absolute top-[200px] left-[4%] w-[40%] h-[290px] flex flex-col z-20">
          <div className="text-white text-5xl font-bold whitespace-nowrap">
            {demoMovie.title}
          </div>
          <div className="text-white text-2xl font-light mt-8 mr-4 line-clamp-3 tracking-wider leading-[30px]">
            {demoMovie.description}
          </div>
          <div className="mt-8 w-full flex flex-row items-center">
            <button className="w-[180px] h-[50px] bg-gray rounded-md text-black text-2xl font-bold z-30 transition duration-300 hover:bg-dark-red">Play</button>
        </div>
        </div>
        
        <button
          onClick={toggleMute}
          className="absolute top-[520px] right-12 border-gray border-2 bg-[rgba(0,0,0,0.2)] rounded-full z-30 p-2"
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
        <div className="absolute space-y-12 w-full top-[550px] px-5 z-30">
          <MovieSlide title="New movies" />
          <MovieSlide title="Popular movies" />
          <MovieSlide title="Trending movies" />
        </div>
      </div>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </div>
  );
}
export default UserHome;
