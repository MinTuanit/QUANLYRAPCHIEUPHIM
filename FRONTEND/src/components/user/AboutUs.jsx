import { React } from "react";
import UserHeader from "./elements/Header";
import Footer from "./elements/Footer";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import wallPaperImg from "../../assets/images/wallpaper.jpg";

function AboutUs() {
  return (
    <div className="bg-black w-full h-full flex flex-col justify-center relative">
      <img
              className="absolute w-full h-[820px] top-[60px] z-0 opacity-10"
              src={wallPaperImg}
            />
      <UserHeader />
      <Box
        sx={{
          width: "84%",
          marginLeft: "8%",
          marginTop: "100px",
          marginBottom: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "14px",
          height: "520px",
          overflow: "auto",
          zIndex: 10,
          color: "white"
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "medium" }}>
            ABOUT US
        </Typography>
      </Box>
      <Footer className="w-full bg-black z-20" />
    </div>
  );
}

export default AboutUs;