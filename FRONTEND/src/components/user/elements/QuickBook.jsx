import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Box,
  Typography,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { keyframes } from "@emotion/react";

function QuickBook() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  // const [dialogOpen, setDialogOpen] = useState(false);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // const handleDialogOpen = () => {
  //   setDialogOpen(true);
  // };

  // const handleDialogClose = () => {
  //   setDialogOpen(false);
  // };

  const renderArrow = () => {
    return <KeyboardArrowDownIcon sx={{ color: "#999999", mr: 1 }} />;
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "black",
        color: "white",
        "& .MuiMenuItem-root": { opacity: 0.5 },
      },
    },
  };

  const allSelected = selectedMovie && selectedDate && selectedTime;

  const shake = keyframes`
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-10px); }
      50% { transform: translateY(10px); }
      75% { transform: translateY(-10px); }
    `;
  return (
    <div className="w-full px-[8%] h-[100px] absolute top-[2500px] z-30">
      <Box
        sx={{
          animation: allSelected ? `${shake} 0.5s ease-in-out` : "none",
          borderColor: allSelected ? "secondary.main" : "#111",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "#111",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <div className="text-white text-3xl ml-2 mr-8 font-semibold font-['Roboto']">
          QUICK BOOK
        </div>
        <FormControl variant="outlined" sx={{ width: 214 }}>
          <Select
            value={selectedMovie}
            onChange={handleMovieChange}
            displayEmpty
            IconComponent={renderArrow}
            MenuProps={menuProps}
            sx={{
              height: "45px",
              color: selectedMovie ? "black" : "#999999",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: selectedMovie ? "primary.main" : "#111",
              border: selectedMovie ? "" : "2px solid #b80007",
              "& .MuiSelect-select": {
                color: selectedMovie ? "black" : "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>Select Movie</em>
            </MenuItem>
            <MenuItem value="Movie1">Movie 1</MenuItem>
            <MenuItem value="Movie2">Movie 2</MenuItem>
            <MenuItem value="Movie3">Movie 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: 214 }}>
          <Select
            value={selectedDate}
            onChange={handleDateChange}
            displayEmpty
            IconComponent={renderArrow}
            MenuProps={menuProps}
            sx={{
              height: "45px",
              color: selectedDate ? "black" : "#999999",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: selectedDate ? "primary.main" : "#111",
              border: selectedDate ? "" : "2px solid #b80007",
              "& .MuiSelect-select": {
                color: selectedDate ? "black" : "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>Select Date</em>
            </MenuItem>
            <MenuItem value="2024-12-14">14/12/2024</MenuItem>
            <MenuItem value="2024-12-15">15/12/2024</MenuItem>
            <MenuItem value="2024-12-16">16/12/2024</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: 214 }}>
          <Select
            value={selectedTime}
            onChange={handleTimeChange}
            displayEmpty
            IconComponent={renderArrow}
            MenuProps={menuProps}
            sx={{
              height: "45px",
              color: selectedTime ? "black" : "#999999",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: selectedTime ? "primary.main" : "#111",
              border: selectedTime ? "" : "2px solid #b80007",
              "& .MuiSelect-select": {
                color: selectedTime ? "black" : "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>Select Time</em>
            </MenuItem>
            <MenuItem value="10:00">10:00</MenuItem>
            <MenuItem value="13:00">13:00</MenuItem>
            <MenuItem value="16:20">16:20</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            height: "50px",
            width: "180px",
            marginRight: 1,
            // animation: allSelected ? `${shake} 0.5s ease-in-out` : 'none',
            backgroundColor: allSelected ? "secondary.main" : "gray",
            transition: "background-color 0.5s ease-in-out",
          }}
          variant="contained"
          // onClick={handleDialogOpen}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            BOOKING
          </Typography>
        </Button>
      </Box>
    </div>
  );
}

export default QuickBook;