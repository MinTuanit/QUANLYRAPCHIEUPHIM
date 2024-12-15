import React, { useState, useRef, useContext } from "react";
import UserHeader from "./Header";
import MovieSlide from "./MovieSlide";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const navigate = useNavigate();
  const handleBuyTicketClicked = () => {
    navigate("/user/movie-detail");
  };

  return (
    <div className="bg-black min-h-screen w-full h-[1300px] relative">
      <div className="absolute top-0 left-0 w-full">
        <UserHeader />
        <div className="absolute space-y-16 w-full top-[100px] px-5 z-30">
          <div className="w-[90%] ml-[5%] h-[72px] border-2 border-[#b80007] flex rounded-xl text-white text-xl font-medium items-center">
            <p className="px-6">SHOW SEARCH RESULTS FOR: {query}</p>
          </div>
          <MovieSlide title="Movie Search Results" />
        </div>
      </div>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </div>
  );
}
export default SearchResult;
