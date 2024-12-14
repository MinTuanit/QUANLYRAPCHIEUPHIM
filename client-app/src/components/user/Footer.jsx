import React from "react";
import { IconButton, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Footer({ className }) {
  return (
    <footer className={`pb-20 text-white items-center bg-black" ${className}`}>
      <div className="w-full h-[1px] bg-line-gray self-center items-center" />
      <div className="self-center mx-[18%] text-center items-center flex flex-row justify-between">
        <div className="flex flex-col my-8 items-start space-y-4">
          <Link to="/" className="logo pl-3 shrink-0 w-56">
            <img
              src={logo}
              alt="Clinic logo"
              style={{ filter: "brightness(1.2)" }}
            />
          </Link>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            sx={{ borderRadius: "20px", width: "180px", border: "2px solid", marginLeft: "10px" }}
          >
            <p className="text-sm font-semibold">Book Ticket Now</p>
          </Button>
        </div>

        <div className="flex flex-col my-10 gap-3 mb-4 text-[13px] text-gray font-thin items-start">
        <Link to="/user/privacy-policy" className="hover:underline">
            Privacy policy
          </Link>
          <Link to="/user/terms-of-service" className="hover:underline">
            Terms of service
          </Link>
          <Link to="/user/about-us" className="hover:underline">
            About us
          </Link>
          <Link to="/user/contact" className="hover:underline">
            Feedback
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4">
        <div className="text-gray text-sm">Connect with us on:</div>
        <div className="flex space-x-2 -ml-2">
            <IconButton
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              size="small"
              sx={{
                color: "white",
                borderRadius: "50%",
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              size="small"
              sx={{
                color: "white",
                borderRadius: "50%",
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              size="small"
              sx={{
                color: "white",
                borderRadius: "50%",
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              <YoutubeIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              size="small"
              sx={{
                color: "white",
                borderRadius: "50%",
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              <XIcon />
            </IconButton>
          </div>
      </div>
      </div>
      
      <p className="mt-4 text-light-gray place-self-center">
          &copy; {new Date().getFullYear()} Movie Trailer Web.
        </p>
        <p className="my-2 text-gray text-xs font-light place-self-center">
          developed by group 7
        </p>
    </footer>
  );
}

export default Footer;
