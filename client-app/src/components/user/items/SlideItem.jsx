import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyleIcon from "@mui/icons-material/Style";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SlideItem({ poster, name, duration, genre, ageLimit, nation }) {
  const navigate = useNavigate();
  const handleBuyTicketClicked = () => {
    navigate("/user/movie-detail");
  };

  return (
    <div className="slide-item relative flex-shrink-0 w-[240px] h-[490px] rounded-md overflow-hidden">
      <img
        className="absolute slide-item-poster w-[240px] h-[360px] object-cover rounded-md z-[9]"
        src={poster}
        alt={`${name} poster`}
      />
      <div className="text-xl font-medium text-white absolute top-[376px] w-full flex justify-center">
        <span className="truncate">{name}</span>
      </div>
      <div className="absolute top-[426px] w-full items-center flex flex-row justify-between">
        <Button
          variant="text"
          size="small"
          color="secondary"
          startIcon={<PlayCircleIcon sx={{ fontSize: 10 }} />}
          sx={{ fontSize: 12, fontWeight: 600 }}
        >
          Play Trailer
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          sx={{ fontSize: 12, fontWeight: 500, color: "#000", px: 2 }}
          onClick={handleBuyTicketClicked}
        >
          Buy Ticket
        </Button>
      </div>
      <div className="absolute slide-item-filter w-[240px] h-[360px] bg-black z-10" />
      <div className="absolute slide-item-info w-full h-[170px] z-[11]">
        <div className="text-white flex flex-col py-4 pl-6">
          <div className="text-[18px] my-2">{name}</div>
          <div className="text-sm pl-2 flex flex-col space-y-2">
            <div>
              <StyleIcon sx={{ fontSize: 16, color: "#ebd113" }} /> {genre}
            </div>
            <div>
              <AccessTimeIcon sx={{ fontSize: 16, color: "#ebd113" }} />{" "}
              {duration}
            </div>
            <div>
              <PersonOffIcon sx={{ fontSize: 16, color: "#ebd113" }} />{" "}
              T{ageLimit}
            </div>
            <div>
              <PublicIcon sx={{ fontSize: 16, color: "#ebd113" }} /> {nation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideItem;
