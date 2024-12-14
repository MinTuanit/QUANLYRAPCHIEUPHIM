import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyleIcon from "@mui/icons-material/Style";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Button from "@mui/material/Button";

function SlideItem({ poster, name, duration, category, nation }) {
  return (
    <div className="slide-item relative flex-shrink-0 w-[292px] h-[250px] rounded-md overflow-hidden">
      <img
        className="absolute slide-item-poster h-[170px] w-full object-cover rounded-md z-[9]"
        src={poster}
        alt={`${name} poster`}
      />
      <div className="absolute top-[186px] w-full px-[20px] items-center flex flex-row justify-between">
        <Button
          variant="text"
          size="small"
          color="secondary"
          startIcon={<PlayCircleIcon sx={{ fontSize: 11 }} />}
          sx={{ fontSize: 13, fontWeight: 600 }}
        >
          Play Trailer
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          sx={{ fontSize: 13, fontWeight: 500, color: "#000" }}
        >
          Buy Ticket
        </Button>
      </div>
      <div className="absolute slide-item-filter w-full h-[170px] bg-black z-10" />
      <div className="absolute slide-item-info w-full h-[170px] z-[11]">
        <div className="text-white flex flex-col py-4 pl-6">
          <div className="text-[18px] my-2">{name}</div>
          <div className="text-xs pl-2 flex flex-col space-y-1">
            <div>
              <StyleIcon sx={{ fontSize: 14, color: "#ebd113" }} /> {category}
            </div>
            <div>
              <AccessTimeIcon sx={{ fontSize: 14, color: "#ebd113" }} />{" "}
              {duration}
            </div>
            <div>
              <PublicIcon sx={{ fontSize: 14, color: "#ebd113" }} /> {nation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlideItem;
