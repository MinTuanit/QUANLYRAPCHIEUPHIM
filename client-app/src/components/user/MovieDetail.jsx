import React from "react";
import magpieMovieImg from "../../assets/images/examples/magpie.jpg";
import UserHeader from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../../AuthContext";

const Movie = {
  name: "Magpie",
  poster: magpieMovieImg,
  genre: "Action",
  duration: "2h 32m",
  nation: "US",
  ageLimit: "16",
  releaseDate: "2008-07-18",
  director: "Christopher Nolan",
  cast: [
    "Christian Bale",
    "Heath Ledger",
    "Aaron Eckhart",
    "Maggie Gyllenhaal",
    "Gary Oldman",
    "Michael Caine",
    "Morgan Freeman",
  ],
  description:
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  rating: 9.0,
  trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU",
};

function MovieDetail() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col relative">
      <UserHeader />
    
      <Footer className="absolute bottom-0 left-0 w-full" />
    </div>
  );
}

export default MovieDetail;
