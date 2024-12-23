import React, { useState } from "react";
import venomMovieImg from "../../assets/images/examples/venom.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyleIcon from "@mui/icons-material/Style";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import UserHeader from "./elements/Header";
import Footer from "./elements/Footer";
import { Button, Dialog, DialogContent } from "@mui/material";
import ShowTimes from "./elements/ShowTimes";
import BookingInfo from "./elements/BookingInfo";
import BookingFooter from "./elements/BookingFooter";
import { exampleProducts } from "../admin/Products"; // Import exampleProducts

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
const exampleShowtimes = [
  { id: "1", date: "21/12/2024", time: "10:00", type: "2D" },
  { id: "2", date: "21/12/2024", time: "13:00", type: "3D" },
  { id: "3", date: "21/12/2024", time: "16:20", type: "2D" },
  { id: "4", date: "21/12/2024", time: "19:30", type: "3D" },
  { id: "5", date: "21/12/2024", time: "22:00", type: "2D" },
  { id: "6", date: "22/12/2024", time: "10:00", type: "3D" },
  { id: "7", date: "22/12/2024", time: "13:00", type: "2D" },
  { id: "8", date: "22/12/2024", time: "16:20", type: "3D" },
  { id: "9", date: "22/12/2024", time: "19:30", type: "2D" },
  { id: "10", date: "22/12/2024", time: "22:00", type: "3D" },
  { id: "11", date: "23/12/2024", time: "10:00", type: "2D" },
  { id: "12", date: "23/12/2024", time: "13:00", type: "3D" },
  { id: "13", date: "23/12/2024", time: "16:20", type: "2D" },
  { id: "14", date: "23/12/2024", time: "19:30", type: "3D" },
  { id: "15", date: "23/12/2024", time: "22:00", type: "2D" },
  { id: "16", date: "21/12/2024", time: "11:00", type: "3D" },
  { id: "17", date: "21/12/2024", time: "12:00", type: "2D" },
  { id: "18", date: "21/12/2024", time: "13:00", type: "3D" },
  { id: "19", date: "21/12/2024", time: "14:00", type: "2D" },
  { id: "20", date: "21/12/2024", time: "15:00", type: "3D" },
  { id: "21", date: "21/12/2024", time: "16:00", type: "2D" },
  { id: "22", date: "21/12/2024", time: "17:00", type: "3D" },
  { id: "23", date: "21/12/2024", time: "18:00", type: "2D" },
  { id: "24", date: "21/12/2024", time: "19:00", type: "3D" },
  { id: "25", date: "21/12/2024", time: "20:00", type: "2D" },
  { id: "26", date: "21/12/2024", time: "21:00", type: "3D" },
  { id: "27", date: "21/12/2024", time: "22:00", type: "2D" },
  { id: "28", date: "21/12/2024", time: "23:00", type: "3D" },
  { id: "29", date: "22/12/2024", time: "11:00", type: "2D" },
  { id: "30", date: "22/12/2024", time: "12:00", type: "3D" },
  { id: "31", date: "22/12/2024", time: "13:00", type: "2D" },
  { id: "32", date: "22/12/2024", time: "14:00", type: "3D" },
  { id: "33", date: "22/12/2024", time: "15:00", type: "2D" },
  { id: "34", date: "22/12/2024", time: "16:00", type: "3D" },
  { id: "35", date: "22/12/2024", time: "17:00", type: "2D" },
  { id: "36", date: "22/12/2024", time: "18:00", type: "3D" },
  { id: "37", date: "22/12/2024", time: "19:00", type: "2D" },
  { id: "38", date: "22/12/2024", time: "20:00", type: "3D" },
  { id: "39", date: "22/12/2024", time: "21:00", type: "2D" },
  { id: "40", date: "22/12/2024", time: "22:00", type: "3D" },
  { id: "41", date: "22/12/2024", time: "23:00", type: "2D" },
  { id: "42", date: "23/12/2024", time: "11:00", type: "3D" },
  { id: "43", date: "23/12/2024", time: "12:00", type: "2D" },
  { id: "44", date: "23/12/2024", time: "13:00", type: "3D" },
  { id: "45", date: "23/12/2024", time: "14:00", type: "2D" },
  { id: "46", date: "23/12/2024", time: "15:00", type: "3D" },
  { id: "47", date: "23/12/2024", time: "16:00", type: "2D" },
  { id: "48", date: "23/12/2024", time: "17:00", type: "3D" },
  { id: "49", date: "23/12/2024", time: "18:00", type: "2D" },
  { id: "50", date: "23/12/2024", time: "19:00", type: "3D" },
  { id: "51", date: "23/12/2024", time: "20:00", type: "2D" },
  { id: "52", date: "23/12/2024", time: "21:00", type: "3D" },
  { id: "53", date: "23/12/2024", time: "22:00", type: "2D" },
  { id: "54", date: "23/12/2024", time: "23:00", type: "3D" },
  { id: "55", date: "21/12/2024", time: "09:00", type: "2D" },
  { id: "56", date: "21/12/2024", time: "10:00", type: "3D" },
  { id: "57", date: "21/12/2024", time: "11:00", type: "2D" },
  { id: "58", date: "21/12/2024", time: "12:00", type: "3D" },
  { id: "59", date: "21/12/2024", time: "13:00", type: "2D" },
  { id: "60", date: "21/12/2024", time: "14:00", type: "3D" },
  { id: "61", date: "21/12/2024", time: "15:00", type: "2D" },
  { id: "62", date: "21/12/2024", time: "16:00", type: "3D" },
  { id: "63", date: "21/12/2024", time: "17:00", type: "2D" },
  { id: "64", date: "21/12/2024", time: "18:00", type: "3D" },
  { id: "65", date: "21/12/2024", time: "19:00", type: "2D" },
  { id: "66", date: "21/12/2024", time: "20:00", type: "3D" },
  { id: "67", date: "21/12/2024", time: "21:00", type: "2D" },
  { id: "68", date: "21/12/2024", time: "22:00", type: "3D" },
  { id: "69", date: "21/12/2024", time: "23:00", type: "2D" },
  { id: "70", date: "22/12/2024", time: "09:00", type: "3D" },
  { id: "71", date: "22/12/2024", time: "10:00", type: "2D" },
  { id: "72", date: "22/12/2024", time: "11:00", type: "3D" },
  { id: "73", date: "22/12/2024", time: "12:00", type: "2D" },
  { id: "74", date: "22/12/2024", time: "13:00", type: "3D" },
  { id: "75", date: "22/12/2024", time: "14:00", type: "2D" },
  { id: "76", date: "22/12/2024", time: "15:00", type: "3D" },
  { id: "77", date: "22/12/2024", time: "16:00", type: "2D" },
  { id: "78", date: "22/12/2024", time: "17:00", type: "3D" },
  { id: "79", date: "22/12/2024", time: "18:00", type: "2D" },
  { id: "80", date: "22/12/2024", time: "19:00", type: "3D" },
  { id: "81", date: "22/12/2024", time: "20:00", type: "2D" },
  { id: "82", date: "22/12/2024", time: "21:00", type: "3D" },
  { id: "83", date: "22/12/2024", time: "22:00", type: "2D" },
  { id: "84", date: "22/12/2024", time: "23:00", type: "3D" },
  { id: "85", date: "23/12/2024", time: "09:00", type: "2D" },
  { id: "86", date: "23/12/2024", time: "10:00", type: "3D" },
  { id: "87", date: "23/12/2024", time: "11:00", type: "2D" },
  { id: "88", date: "23/12/2024", time: "12:00", type: "3D" },
  { id: "89", date: "23/12/2024", time: "13:00", type: "2D" },
  { id: "90", date: "23/12/2024", time: "14:00", type: "3D" },
  { id: "91", date: "23/12/2024", time: "15:00", type: "2D" },
  { id: "92", date: "23/12/2024", time: "16:00", type: "3D" },
  { id: "93", date: "23/12/2024", time: "17:00", type: "2D" },
  { id: "94", date: "23/12/2024", time: "18:00", type: "3D" },
  { id: "95", date: "23/12/2024", time: "19:00", type: "2D" },
  { id: "96", date: "23/12/2024", time: "20:00", type: "3D" },
  { id: "97", date: "23/12/2024", time: "21:00", type: "2D" },
  { id: "98", date: "23/12/2024", time: "22:00", type: "3D" },
  { id: "99", date: "23/12/2024", time: "23:00", type: "2D" },
  { id: "100", date: "21/12/2024", time: "08:00", type: "3D" },
  { id: "101", date: "21/12/2024", time: "09:00", type: "2D" },
  { id: "102", date: "21/12/2024", time: "10:00", type: "3D" },
  { id: "103", date: "21/12/2024", time: "11:00", type: "2D" },
  { id: "104", date: "21/12/2024", time: "12:00", type: "3D" },
  { id: "105", date: "21/12/2024", time: "13:00", type: "2D" },
  { id: "106", date: "21/12/2024", time: "14:00", type: "3D" },
  { id: "107", date: "21/12/2024", time: "15:00", type: "2D" },
  { id: "108", date: "21/12/2024", time: "16:00", type: "3D" },
  { id: "109", date: "21/12/2024", time: "17:00", type: "2D" },
  { id: "110", date: "21/12/2024", time: "18:00", type: "3D" },
  { id: "111", date: "21/12/2024", time: "19:00", type: "2D" },
  { id: "112", date: "21/12/2024", time: "20:00", type: "3D" },
  { id: "113", date: "21/12/2024", time: "21:00", type: "2D" },
  { id: "114", date: "21/12/2024", time: "22:00", type: "3D" },
  { id: "115", date: "21/12/2024", time: "23:00", type: "2D" },
  { id: "116", date: "22/12/2024", time: "08:00", type: "3D" },
  { id: "117", date: "22/12/2024", time: "09:00", type: "2D" },
  { id: "118", date: "22/12/2024", time: "10:00", type: "3D" },
  { id: "119", date: "22/12/2024", time: "11:00", type: "2D" },
];
const exampleSeats = [
  { theater_id: 1, seat_id: "A01", column: -5, status: "available" },
  { theater_id: 1, seat_id: "A02", column: -2, status: "unavailable" },
  { theater_id: 1, seat_id: "A03", column: -1, status: "available" },
  { theater_id: 1, seat_id: "A04", column: 0, status: "available" },
  { theater_id: 1, seat_id: "A05", column: 1, status: "available" },
  { theater_id: 1, seat_id: "A06", column: 2, status: "unavailable" },
  { theater_id: 1, seat_id: "A07", column: 6, status: "available" },
  { theater_id: 1, seat_id: "B01", column: -3, status: "available" },
  { theater_id: 1, seat_id: "B02", column: -2, status: "available" },
  { theater_id: 1, seat_id: "B03", column: -1, status: "unavailable" },
  { theater_id: 1, seat_id: "B04", column: 0, status: "available" },
  { theater_id: 1, seat_id: "B05", column: 1, status: "available" },
  { theater_id: 1, seat_id: "B06", column: 2, status: "available" },
  { theater_id: 1, seat_id: "B07", column: 4, status: "unavailable" },
  { theater_id: 1, seat_id: "C01", column: -4, status: "available" },
  { theater_id: 1, seat_id: "C02", column: -2, status: "available" },
  { theater_id: 1, seat_id: "C03", column: -1, status: "available" },
  { theater_id: 1, seat_id: "C04", column: 0, status: "unavailable" },
  { theater_id: 1, seat_id: "C05", column: 1, status: "available" },
  { theater_id: 1, seat_id: "C06", column: 2, status: "available" },
  { theater_id: 1, seat_id: "C07", column: 3, status: "available" },
  { theater_id: 1, seat_id: "D01", column: -3, status: "unavailable" },
  { theater_id: 1, seat_id: "D02", column: -2, status: "available" },
  { theater_id: 1, seat_id: "D03", column: -1, status: "available" },
  { theater_id: 1, seat_id: "D04", column: 0, status: "available" },
  { theater_id: 1, seat_id: "D05", column: 1, status: "unavailable" },
  { theater_id: 1, seat_id: "D06", column: 2, status: "available" },
  { theater_id: 1, seat_id: "D07", column: 3, status: "available" },
  { theater_id: 1, seat_id: "E01", column: -6, status: "available" },
  { theater_id: 1, seat_id: "E02", column: -4, status: "unavailable" },
  { theater_id: 1, seat_id: "E03", column: -1, status: "available" },
  { theater_id: 1, seat_id: "E04", column: 0, status: "available" },
  { theater_id: 1, seat_id: "E05", column: 1, status: "available" },
  { theater_id: 1, seat_id: "E06", column: 2, status: "unavailable" },
  { theater_id: 1, seat_id: "E07", column: 3, status: "available" },
  { theater_id: 1, seat_id: "F01", column: -3, status: "available" },
  { theater_id: 1, seat_id: "F02", column: -2, status: "available" },
  { theater_id: 1, seat_id: "F03", column: -1, status: "unavailable" },
  { theater_id: 1, seat_id: "F04", column: 0, status: "available" },
  { theater_id: 1, seat_id: "F05", column: 1, status: "available" },
  { theater_id: 1, seat_id: "F06", column: 2, status: "available" },
  { theater_id: 1, seat_id: "F07", column: 3, status: "unavailable" },
  { theater_id: 1, seat_id: "G01", column: -7, status: "available" },
  { theater_id: 1, seat_id: "G02", column: -2, status: "available" },
  { theater_id: 1, seat_id: "G03", column: -1, status: "available" },
  { theater_id: 1, seat_id: "G04", column: 0, status: "unavailable" },
  { theater_id: 1, seat_id: "G05", column: 1, status: "available" },
  { theater_id: 1, seat_id: "G06", column: 2, status: "available" },
  { theater_id: 1, seat_id: "G07", column: 7, status: "available" },
];

function MovieDetail() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((s) => s !== seat)
      );
    } else if (selectedSeats.length < ticketCount) {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seat]);
    }
  };

  const handleIncrement = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setTicketCount((prevCount) => {
      const newCount = Math.max(prevCount - 1, 0);
      if (newCount < selectedSeats.length) {
        setSelectedSeats((prevSelectedSeats) =>
          prevSelectedSeats.slice(0, newCount)
        );
      }
      return newCount;
    });
  };

  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      <UserHeader />
      <img
        className="absolute top-0 w-full object-cover z-0 overflow-hidden"
        src={exampleMovie.poster}
        style={{
          filter: "blur(10px)",
          opacity: 0.2,
        }}
        alt={`${exampleMovie.name} poster`}
      />
      <div className="flex flex-col w-full py-32 h-[100%]">
        <div className="px-[16%]">
          <MovieInfo />
          <div className="flex flex-col mt-24">
            <div className="text-white text-4xl font-bold self-center">
              SHOWTIMES
            </div>
            <ShowTimes showtimes={exampleShowtimes} />
          </div>
          <div className="flex flex-col mt-24">
            <div className="text-white text-4xl font-bold self-center">
              BOOKING INFO
            </div>
          </div>
          <BookingInfo
            seats={exampleSeats}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            ticketCount={ticketCount}
            setTicketCount={setTicketCount}
            products={exampleProducts}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </div>
      </div>

      <Footer className="w-full bg-black z-20 mt-32" />
      <BookingFooter
        className="z-[100]"
        movie={exampleMovie}
        selectedProducts={selectedProducts}
      />
    </div>
  );
}

export default MovieDetail;

function MovieInfo({ onClickOpen }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  return (
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
              onClick={handleClickOpen}
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
            <Dialog open={open} onClose={handleClose} maxWidth="lg">
              <DialogContent>
                <iframe
                  width="1000"
                  height="562.5"
                  src={getEmbedUrl(exampleMovie.trailer)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Trailer"
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
