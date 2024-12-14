import React, { useState } from "react";
import venomMovieImg from "../../assets/images/examples/venom.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyleIcon from "@mui/icons-material/Style";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import UserHeader from "./Header";
import Footer from "./Footer";
import { Button, Box, Tab, Tabs, Typography } from "@mui/material";
import { styled, darken } from "@mui/system";

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
  { id: "1", date: "14/12/2024", time: "10:00", type: "2D" },
  { id: "2", date: "14/12/2024", time: "13:00", type: "3D" },
  { id: "3", date: "14/12/2024", time: "16:20", type: "2D" },
  { id: "4", date: "14/12/2024", time: "19:30", type: "3D" },
  { id: "5", date: "14/12/2024", time: "22:00", type: "2D" },
  { id: "6", date: "15/12/2024", time: "10:00", type: "3D" },
  { id: "7", date: "15/12/2024", time: "13:00", type: "2D" },
  { id: "8", date: "15/12/2024", time: "16:20", type: "3D" },
  { id: "9", date: "15/12/2024", time: "19:30", type: "2D" },
  { id: "10", date: "15/12/2024", time: "22:00", type: "3D" },
  { id: "11", date: "16/12/2024", time: "10:00", type: "2D" },
  { id: "12", date: "16/12/2024", time: "13:00", type: "3D" },
  { id: "13", date: "16/12/2024", time: "16:20", type: "2D" },
  { id: "14", date: "16/12/2024", time: "19:30", type: "3D" },
  { id: "15", date: "16/12/2024", time: "22:00", type: "2D" },
  { id: "16", date: "14/12/2024", time: "11:00", type: "3D" },
  { id: "17", date: "14/12/2024", time: "12:00", type: "2D" },
  { id: "18", date: "14/12/2024", time: "13:00", type: "3D" },
  { id: "19", date: "14/12/2024", time: "14:00", type: "2D" },
  { id: "20", date: "14/12/2024", time: "15:00", type: "3D" },
  { id: "21", date: "14/12/2024", time: "16:00", type: "2D" },
  { id: "22", date: "14/12/2024", time: "17:00", type: "3D" },
  { id: "23", date: "14/12/2024", time: "18:00", type: "2D" },
  { id: "24", date: "14/12/2024", time: "19:00", type: "3D" },
  { id: "25", date: "14/12/2024", time: "20:00", type: "2D" },
  { id: "26", date: "14/12/2024", time: "21:00", type: "3D" },
  { id: "27", date: "14/12/2024", time: "22:00", type: "2D" },
  { id: "28", date: "14/12/2024", time: "23:00", type: "3D" },
  { id: "29", date: "15/12/2024", time: "11:00", type: "2D" },
  { id: "30", date: "15/12/2024", time: "12:00", type: "3D" },
  { id: "31", date: "15/12/2024", time: "13:00", type: "2D" },
  { id: "32", date: "15/12/2024", time: "14:00", type: "3D" },
  { id: "33", date: "15/12/2024", time: "15:00", type: "2D" },
  { id: "34", date: "15/12/2024", time: "16:00", type: "3D" },
  { id: "35", date: "15/12/2024", time: "17:00", type: "2D" },
  { id: "36", date: "15/12/2024", time: "18:00", type: "3D" },
  { id: "37", date: "15/12/2024", time: "19:00", type: "2D" },
  { id: "38", date: "15/12/2024", time: "20:00", type: "3D" },
  { id: "39", date: "15/12/2024", time: "21:00", type: "2D" },
  { id: "40", date: "15/12/2024", time: "22:00", type: "3D" },
  { id: "41", date: "15/12/2024", time: "23:00", type: "2D" },
  { id: "42", date: "16/12/2024", time: "11:00", type: "3D" },
  { id: "43", date: "16/12/2024", time: "12:00", type: "2D" },
  { id: "44", date: "16/12/2024", time: "13:00", type: "3D" },
  { id: "45", date: "16/12/2024", time: "14:00", type: "2D" },
  { id: "46", date: "16/12/2024", time: "15:00", type: "3D" },
  { id: "47", date: "16/12/2024", time: "16:00", type: "2D" },
  { id: "48", date: "16/12/2024", time: "17:00", type: "3D" },
  { id: "49", date: "16/12/2024", time: "18:00", type: "2D" },
  { id: "50", date: "16/12/2024", time: "19:00", type: "3D" },
  { id: "51", date: "16/12/2024", time: "20:00", type: "2D" },
  { id: "52", date: "16/12/2024", time: "21:00", type: "3D" },
  { id: "53", date: "16/12/2024", time: "22:00", type: "2D" },
  { id: "54", date: "16/12/2024", time: "23:00", type: "3D" },
  { id: "55", date: "14/12/2024", time: "09:00", type: "2D" },
  { id: "56", date: "14/12/2024", time: "10:00", type: "3D" },
  { id: "57", date: "14/12/2024", time: "11:00", type: "2D" },
  { id: "58", date: "14/12/2024", time: "12:00", type: "3D" },
  { id: "59", date: "14/12/2024", time: "13:00", type: "2D" },
  { id: "60", date: "14/12/2024", time: "14:00", type: "3D" },
  { id: "61", date: "14/12/2024", time: "15:00", type: "2D" },
  { id: "62", date: "14/12/2024", time: "16:00", type: "3D" },
  { id: "63", date: "14/12/2024", time: "17:00", type: "2D" },
  { id: "64", date: "14/12/2024", time: "18:00", type: "3D" },
  { id: "65", date: "14/12/2024", time: "19:00", type: "2D" },
  { id: "66", date: "14/12/2024", time: "20:00", type: "3D" },
  { id: "67", date: "14/12/2024", time: "21:00", type: "2D" },
  { id: "68", date: "14/12/2024", time: "22:00", type: "3D" },
  { id: "69", date: "14/12/2024", time: "23:00", type: "2D" },
  { id: "70", date: "15/12/2024", time: "09:00", type: "3D" },
  { id: "71", date: "15/12/2024", time: "10:00", type: "2D" },
  { id: "72", date: "15/12/2024", time: "11:00", type: "3D" },
  { id: "73", date: "15/12/2024", time: "12:00", type: "2D" },
  { id: "74", date: "15/12/2024", time: "13:00", type: "3D" },
  { id: "75", date: "15/12/2024", time: "14:00", type: "2D" },
  { id: "76", date: "15/12/2024", time: "15:00", type: "3D" },
  { id: "77", date: "15/12/2024", time: "16:00", type: "2D" },
  { id: "78", date: "15/12/2024", time: "17:00", type: "3D" },
  { id: "79", date: "15/12/2024", time: "18:00", type: "2D" },
  { id: "80", date: "15/12/2024", time: "19:00", type: "3D" },
  { id: "81", date: "15/12/2024", time: "20:00", type: "2D" },
  { id: "82", date: "15/12/2024", time: "21:00", type: "3D" },
  { id: "83", date: "15/12/2024", time: "22:00", type: "2D" },
  { id: "84", date: "15/12/2024", time: "23:00", type: "3D" },
  { id: "85", date: "16/12/2024", time: "09:00", type: "2D" },
  { id: "86", date: "16/12/2024", time: "10:00", type: "3D" },
  { id: "87", date: "16/12/2024", time: "11:00", type: "2D" },
  { id: "88", date: "16/12/2024", time: "12:00", type: "3D" },
  { id: "89", date: "16/12/2024", time: "13:00", type: "2D" },
  { id: "90", date: "16/12/2024", time: "14:00", type: "3D" },
  { id: "91", date: "16/12/2024", time: "15:00", type: "2D" },
  { id: "92", date: "16/12/2024", time: "16:00", type: "3D" },
  { id: "93", date: "16/12/2024", time: "17:00", type: "2D" },
  { id: "94", date: "16/12/2024", time: "18:00", type: "3D" },
  { id: "95", date: "16/12/2024", time: "19:00", type: "2D" },
  { id: "96", date: "16/12/2024", time: "20:00", type: "3D" },
  { id: "97", date: "16/12/2024", time: "21:00", type: "2D" },
  { id: "98", date: "16/12/2024", time: "22:00", type: "3D" },
  { id: "99", date: "16/12/2024", time: "23:00", type: "2D" },
  { id: "100", date: "14/12/2024", time: "08:00", type: "3D" },
  { id: "101", date: "14/12/2024", time: "09:00", type: "2D" },
  { id: "102", date: "14/12/2024", time: "10:00", type: "3D" },
  { id: "103", date: "14/12/2024", time: "11:00", type: "2D" },
  { id: "104", date: "14/12/2024", time: "12:00", type: "3D" },
  { id: "105", date: "14/12/2024", time: "13:00", type: "2D" },
  { id: "106", date: "14/12/2024", time: "14:00", type: "3D" },
  { id: "107", date: "14/12/2024", time: "15:00", type: "2D" },
  { id: "108", date: "14/12/2024", time: "16:00", type: "3D" },
  { id: "109", date: "14/12/2024", time: "17:00", type: "2D" },
  { id: "110", date: "14/12/2024", time: "18:00", type: "3D" },
  { id: "111", date: "14/12/2024", time: "19:00", type: "2D" },
  { id: "112", date: "14/12/2024", time: "20:00", type: "3D" },
  { id: "113", date: "14/12/2024", time: "21:00", type: "2D" },
  { id: "114", date: "14/12/2024", time: "22:00", type: "3D" },
  { id: "115", date: "14/12/2024", time: "23:00", type: "2D" },
  { id: "116", date: "15/12/2024", time: "08:00", type: "3D" },
  { id: "117", date: "15/12/2024", time: "09:00", type: "2D" },
  { id: "118", date: "15/12/2024", time: "10:00", type: "3D" },
  { id: "119", date: "15/12/2024", time: "11:00", type: "2D" },
]

function MovieDetail() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col relative">
      <UserHeader />
      <img
        className="absolute top-0 w-full object-cover z-0"
        src={exampleMovie.poster}
        style={{
          filter: "blur(10px)",
          opacity: 0.2,
        }}
        alt={`${exampleMovie.name} poster`}
      />
      <div className="flex flex-col w-full px-[16%] py-32 h-[100%]">
        <MovieInfo />
        <div className="flex flex-col mt-24">
          <div className="text-white text-4xl font-bold self-center">
            SHOWTIMES
          </div>
          <ShowTimes/>
        </div>
      </div>

      <Footer className="w-full bg-black z-20" />
    </div>
  );
}

export default MovieDetail;

function MovieInfo() {
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
  );
}

const CustomTab = styled(Tab)(({ theme }) => ({
  minWidth: 0,
  width: 96,
  height: 82,
  borderRadius: 6,
  "&.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
  },
  "&:not(.Mui-selected)": {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const ShowTimes = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFormattedDate = (offset) => {
    const date = new Date("2024-12-14");
    date.setDate(date.getDate() + offset);
    const fullDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const displayDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
    const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' });
    return { fullDate, displayDate, weekday };
  };

  const selectedDate = getFormattedDate(value).fullDate;

  const showtimes2D = exampleShowtimes.filter(showtime => showtime.date === selectedDate && showtime.type === "2D");
  const showtimes3D = exampleShowtimes.filter(showtime => showtime.date === selectedDate && showtime.type === "3D");

  const isPastShowtime = (date, time) => {
    const showtimeDate = new Date(`${date.split('/').reverse().join('-')}T${time}`);
    return showtimeDate < new Date();
  };

  return (
    <Box sx={{ width: 1, paddingInline: 36, display: "flex", flexDirection: "column", alignItems: "center", marginTop: 5, zIndex: 10 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <CustomTab label={<CustomTabLabel {...getFormattedDate(0)} />} sx={{ marginRight: 2 }} />
        <CustomTab label={<CustomTabLabel {...getFormattedDate(1)} />} sx={{ marginRight: 2 }} />
        <CustomTab label={<CustomTabLabel {...getFormattedDate(2)} />} />
      </Tabs>
      <Box sx={{ paddingX: 4, paddingTop: 2, paddingBottom: 6, backgroundColor: "black", width: 800, marginTop: 6, borderRadius: 4 }}>
        <Typography sx={{ fontWeight: 'medium', marginY: 2, fontSize: 26, color: 'lightgray', letterSpacing: '0.1em'  }}>Standard 2D</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {showtimes2D.map(showtime => (
            <Box
              key={showtime.id}
              sx={{
                border: '1px solid',
                borderColor: isPastShowtime(showtime.date, showtime.time) ? 'gray' : theme => theme.palette.secondary.main,
                padding: 1,
                borderRadius: 1,
                transition: 'transform 0.1s',
                cursor: isPastShowtime(showtime.date, showtime.time) ? 'default' : 'pointer',
              '&:hover': {transform: isPastShowtime(showtime.date, showtime.time) ? 'none' : 'translateY(-4px)' }
            }}
            >
                <Typography sx={{ color: "gray", fontSize: 14, color: isPastShowtime(showtime.date, showtime.time) ? 'gray' : theme => theme.palette.secondary.main,  }}>{showtime.time}</Typography>
            </Box>
          ))}
        </Box> 
        <Typography sx={{ fontWeight: 'medium', marginY: 2, fontSize: 26, color: 'lightgray', letterSpacing: '0.1em'  }}>Standard 3D</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {showtimes3D.map(showtime => (
             <Box
             key={showtime.id}
             sx={{
               border: '1px solid',
               borderColor: isPastShowtime(showtime.date, showtime.time) ? 'gray' : theme => theme.palette.secondary.main,
               padding: 1,
               borderRadius: 1,
               transition: 'transform 0.1s',
               cursor: isPastShowtime(showtime.date, showtime.time) ? 'default' : 'pointer',
             '&:hover': {transform: isPastShowtime(showtime.date, showtime.time) ? 'none' : 'translateY(-4px)' }
              }}
           >
              <Typography sx={{ color: "gray", fontSize: 14, color: isPastShowtime(showtime.date, showtime.time) ? 'gray' : theme => theme.palette.secondary.main }}>{showtime.time}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const CustomTabLabel = ({ displayDate, weekday }) => (
  <Box>
    <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>{displayDate}</Typography>
    <Typography sx={{ fontWeight: 'normal', fontSize: 12, marginTop: 1 }}>{weekday}</Typography>
  </Box>
);
