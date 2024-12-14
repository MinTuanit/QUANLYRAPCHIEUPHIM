import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import NotificationImg from "../../assets/images/notification.svg";
import ArrowDownImg from "../../assets/images/arrowDown.svg";
import SearchIcon from "@mui/icons-material/Search";

function UserHeader({ isLoggedIn, userProfile, onLogout, className }) {
  const navigate = useNavigate();
  const handleNotificationClick = () => {
    // alert("Notification clicked");
  };
  const handleArrowDownClick = () => {
    // alert("Arrow down clicked");
  };
  const handleLoginClick = () => {
    navigate("/user/login");
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate("/");
  };
  return (
    <header
      className={`header fixed top-0 left-0 z-[1000] w-[100vw] h-[60px] flex items-center p-4 ${className}`}
      style={{
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85))",
      }}
    >
      <Link to="/" className="logo pl-3 shrink-0 w-56">
        <img
          src={logo}
          alt="Clinic logo"
          style={{ filter: "brightness(1.2)" }}
        />
      </Link>
      <Button
        variant="contained"
        size="small"
        color="primary"
        sx={{ borderRadius: "20px" }}
      >
        <p className="text-black text-sm font-semibold">Book Ticket Now</p>
      </Button>

      <div className="flex items-center ml-auto mr-6 w-[calc(100vw - 240px)] space-x-4 flex-shrink-0">
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              padding: "0 8px",
              height: "100%",
              fontSize: "0.875rem",
            },
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "99px",
            height: "30px",
            width: "200px",
          }}
        />
        <button
          className="header-notification hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleNotificationClick}
        >
          <img
            className="size-6"
            src={NotificationImg}
            alt="Notification"
            style={{ filter: "invert(100%) brightness(200%)" }}
          />
        </button>
        {isLoggedIn ? (
          <div>
            <span className="profile-name text-light-gray text-sm">
              {userProfile.name}
            </span>
            <img
              className="profile-pic size-8 rounded-[6px]"
              src={userProfile.picture}
            />
          </div>
        ) : (
          <>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{ borderRadius: "20px", fontSize: "13px", color: "black" }}
              onClick={handleLoginClick}
            >
              SignIn or SignUp
            </Button>
          </>
        )}
        <button
          className="arrow-down hover:transform hover:-translate-y-1 transition-transform duration-200"
          onClick={handleArrowDownClick}
        >
          <img
            className="size-6"
            src={ArrowDownImg}
            alt="Arrow Down"
            style={{ filter: "invert(100%) brightness(200%) constrast(200%)" }}
          />
        </button>
      </div>
    </header>
  );
}

export default UserHeader;
