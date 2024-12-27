import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyleIcon from "@mui/icons-material/Style";
import PublicIcon from "@mui/icons-material/Public";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@mui/material";

function ProductItem({
  poster,
  name,
  duration,
  genre,
  ageLimit,
  nation,
  trailer,
}) {
  const exampleMovie = { trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c" };
  const [open, setOpen] = React.useState(false);
  const handlePlayTrailerClicked = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const handleBuyTicketClicked = () => {
    navigate("/user/movie-detail");
  };

  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  return (
    <div className="product-item relative flex-shrink-0 w-[240px] h-[490px] rounded-md overflow-hidden">
      
    </div>
  );
}
export default ProductItem;
