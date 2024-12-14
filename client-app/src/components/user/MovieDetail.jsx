import React from "react";
import venomMovieImg from "../../assets/images/examples/venom.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyleIcon from "@mui/icons-material/Style";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import UserHeader from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../../AuthContext";
import { Button } from "@mui/material";

const exampleMovie = {
  name: "Venom: The Last Dance",
  poster: venomMovieImg,
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
      <div>
        <img
          className="absolute top-0 w-full h-full object-cover z-0"
          src={exampleMovie.poster}
          style={{
            filter: "blur(10px)",
            opacity: 0.2,
          }}
          alt={`${exampleMovie.name} poster`}
        />
        <div className="flex flex-col w-full px-[16%] py-32 h-[100%]">
          <div className="flex flex-row z-10">
            <img
              className="w-[400px] h-[600px] z-10 object-cover border border-gray rounded-md"
              src={exampleMovie.poster}
            />
            <div>
              <div className="text-sm text-gray flex flex-col py-4 pl-6">
                <div className="text-sm text-gray pl-2 flex flex-col space-y-6">
                  <div className="text-white text-4xl font-bold">
                    {exampleMovie.name}
                  </div>
                  <div className="text-white text-lg tracking-wide space-y-2 pl-4">
                    <div>
                      <StyleIcon
                        sx={{
                          fontSize: 24,
                          color: "#ebd113",
                          marginRight: 1.5,
                        }}
                      />
                      {exampleMovie.genre}
                    </div>
                    <div>
                      <AccessTimeIcon
                        sx={{
                          fontSize: 24,
                          color: "#ebd113",
                          marginRight: 1.5,
                        }}
                      />
                      {exampleMovie.duration}
                    </div>
                    <div>
                      <PublicIcon
                        sx={{
                          fontSize: 24,
                          color: "#ebd113",
                          marginRight: 1.5,
                        }}
                      />
                      {exampleMovie.nation}
                    </div>
                    <div>
                      <PersonOffIcon
                        sx={{
                          fontSize: 24,
                          color: "#ebd113",
                          marginRight: 1.5,
                        }}
                      />
                      T{exampleMovie.ageLimit}
                    </div>
                  </div>
                  <div className="pt-6">
                    <div
                      className="text-white text-xl font-semibold"
                      style={{ fontFamily: "Roboto" }}
                    >
                      MORE INFORMATION:
                    </div>
                    <div className="text-sm mt-2">
                      <strong>Director:</strong> {exampleMovie.director}
                    </div>
                    <div className="text-sm mt-2">
                      <strong>Cast:</strong> {exampleMovie.cast.join(", ")}
                    </div>
                    <div className="text-sm mt-2">
                      <strong>Release Date:</strong> {exampleMovie.releaseDate}
                    </div>
                    <div className="text-sm mt-2">
                      <strong>Rating:</strong> {exampleMovie.rating}
                    </div>
                  </div>
                  <div className="pt-6">
                    <div
                      className="text-white text-xl font-semibold"
                      style={{ fontFamily: "Roboto" }}
                    >
                      MOVIE CONTENT:
                    </div>
                    <div className="text-sm">{exampleMovie.description}</div>
                  </div>
                  <Button
                    variant="text"
                    color="secondary"
                    startIcon={<PlayCircleIcon sx={{ fontSize: 12 }} />}
                    sx={{
                      width: "200px",
                      fontSize: 18,
                      fontWeight: 600,
                      marginLeft: -2,
                    }}
                    className="flex-shrink-0"
                  >
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-20">
            <div className="text-white text-4xl font-semibold pt-6 self-center">
              SHOWTIMES
            </div>
          </div>
        </div>
      </div>
      <Footer className="w-full bg-black z-20" />
    </div>
  );
}

export default MovieDetail;
