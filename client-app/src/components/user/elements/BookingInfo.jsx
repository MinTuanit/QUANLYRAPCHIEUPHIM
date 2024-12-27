import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  IconButton,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";

const ticketPrice = 45000;

const BookingInfo = ({
  seats,
  selectedSeats,
  setSelectedSeats,
  ticketCount,
  setTicketCount,
  products,
  selectedProducts,
  setSelectedProducts,
}) => {
  const theme = useTheme();

  return (
    <div className="flex flex-col mt-12 z-30 bg-black my-10">
      <Accordion
        sx={{
          backgroundColor: "black",
          margin: 0,
          borderBottom: "2px solid #222",
        }}
        disableGutters
      >
        <AccordionSummary
          sx={{ paddingX: 4, backgroundColor: "black" }}
          expandIcon={
            <ExpandMoreIcon sx={{ color: "primary.main", fontSize: 40 }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            className="tracking-widest"
            sx={{
              color: "lightgray",
              fontWeight: "bold",
              py: 2,
              letterSpacing: "0.1em",
            }}
          >
            SELECT SEATS
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "black", padding: 0 }}>
          <SeatSelecting
            seats={seats}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            ticketCount={ticketCount}
            setTicketCount={setTicketCount}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "black",
          margin: 0,
          borderBottom: "2px solid #222",
        }}
        disableGutters
      >
        <AccordionSummary
          sx={{ paddingX: 4, backgroundColor: "black" }}
          expandIcon={
            <ExpandMoreIcon sx={{ color: "primary.main", fontSize: 40 }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            className="tracking-widest"
            sx={{
              color: "lightgray",
              fontWeight: "bold",
              py: 2,
              letterSpacing: "0.1em",
            }}
          >
            BUY FOOD & DRINK
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "black", padding: 0 }}>
          <ProductSelecting
            products={products}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default BookingInfo;

//SEAT SELECTING
const SeatSelecting = ({
  seats,
  selectedSeats,
  setSelectedSeats,
  ticketCount,
  setTicketCount,
}) => {
  const theme = useTheme();
  const rows = "ABCDEFGHIJKLMN".split("");
  const columnOffset = 9;

  const grid = Array.from({ length: 13 }, () => Array(19).fill(null));
  seats.forEach((seat) => {
    const rowIndex = rows.indexOf(seat.seat_id[0]);
    const columnIndex = seat.column + columnOffset;
    grid[rowIndex][columnIndex] = seat;
  });

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.some((s) => s.seat_id === seat.seat_id)) {
        return prevSelectedSeats.filter((s) => s.seat_id !== seat.seat_id);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        paddingTop: 8,
        zIndex: 10,
        borderTop: "2px solid #222",
      }}
    >
      <Box
        sx={{
          width: 0.8,
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "320px",
            height: "140px",
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 2,
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingX: 2,
            paddingY: 1,
            justifyItems: "flex-start",
            // backgroundColor: 'blue'
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "white", fontWeight: "medium" }}
          >
            Ticket
          </Typography>
          <Typography variant="h6" sx={{ color: "gray", fontWeight: "normal" }}>
            {ticketPrice}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              left: 12,
            }}
          >
            <NumberPicker
              value={ticketCount}
              onChange={(value) => {
                setSelectedSeats([]);
                setTicketCount(value);
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "240px",
            height: "140px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "lightgray", fontWeight: "bold", mt: -2, ml: -2 }}
          >
            Note:
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Box
              sx={{
                width: 38,
                height: 23,
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: 1,
                marginRight: 1,
              }}
            />
            <Typography variant="body1" sx={{ color: "gray" }}>
              Available Seat
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Box
              sx={{
                width: 38,
                height: 23,
                backgroundColor: "gray",
                border: "1px solid black",
                borderRadius: 1,
                marginRight: 1,
              }}
            />
            <Typography variant="body1" sx={{ color: "gray" }}>
              Resersed Seat
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Box
              sx={{
                width: 38,
                height: 23,
                backgroundColor: theme.palette.secondary.main,
                border: "1px solid black",
                borderRadius: 1,
                marginRight: 1,
              }}
            />
            <Typography variant="body1" sx={{ color: "gray" }}>
              Selected Seat
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mb: 4,
          mt: 10,
          py: 10,
          border: "2px solid gray",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            mb: 1,
          }}
        >
          SCREEN
        </Typography>
        <div className="h-3 w-[600px] bg-white rounded-full self-center items-center mb-2" />
        <Box
          sx={{
            height: 360,
            display: "grid",
            gridTemplateColumns: `repeat(19, 42px)`,
            gridTemplateRows: `repeat(13, 30px)`,
            justifyContent: "center",
            gap: 1,
            marginTop: 6,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((seat, columnIndex) => (
              <Box
                key={`${rowIndex}-${columnIndex}`}
                sx={{
                  gridRow: rowIndex + 1,
                  gridColumn: columnIndex + 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {seat ? (
                  <SeatUnit
                    seat={seat}
                    isSelected={selectedSeats.includes(seat.seat_id)}
                    onClick={handleSeatClick}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 42,
                      height: 26,
                    }}
                  />
                )}
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

const SeatUnit = ({ seat, isSelected, onClick }) => {
  const theme = useTheme();
  const getBackgroundColor = (status, isSelected) => {
    if (status === "unavailable") {
      return "gray";
    }
    if (isSelected) {
      return theme.palette.secondary.main;
    }
    return "white";
  };
  return (
    <Box
      onClick={() => onClick(seat)}
      sx={{
        width: 42,
        height: 26,
        borderRadius: "4px",
        backgroundColor: getBackgroundColor(seat.status, isSelected),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Typography sx={{ color: "black", fontSize: 14, fontWeight: "bold" }}>
        {seat.seat_id}
      </Typography>
    </Box>
  );
};

const NumberPicker = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };
  const handleDecrement = () => {
    onChange(value - 1);
  };
  return (
    <Box
      sx={{
        width: "104px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#222",
        borderRadius: 2,
      }}
    >
      <Button
        onClick={handleDecrement}
        sx={{
          minWidth: 32,
          height: 32,
          borderRadius: "2px 0 0 2px",
          fontSize: 30,
          pt: 0.25,
          fontWeight: "medium",
          borderRight: "1px solid #444",
          color: "gray",
        }}
      >
        -
      </Button>
      <Typography
        sx={{
          width: 40,
          height: 32,
          textAlign: "center",
          fontWeight: "medium",
          fontSize: 18,
          pt: 0.25,
          color: "white",
          zIndex: 30,
        }}
      >
        {value}
      </Typography>
      <Button
        onClick={handleIncrement}
        sx={{
          minWidth: 32,
          height: 32,
          borderRadius: "0 2px 2px 0",
          backgroundColor: "transparent",
          fontSize: 24,
          pt: 0.25,
          fontWeight: "medium",
          borderLeft: "1px solid #444",
          color: "gray",
        }}
      >
        +
      </Button>
    </Box>
  );
};

//PRODUCTS BUYING
const ProductSelecting = ({ products, selectedProducts, setSelectedProducts }) => {
  return (
    <Box
      sx={{
        width: 1,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        paddingX: 4,
        paddingY: 10,
        rowGap: 6,
        zIndex: 10,
        borderTop: "2px solid #222",
      }}
    >
      {products.map((product) => (
        <ProductItem
          key={product.title}
          product={product}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      ))}
    </Box>
  );
};
const ProductItem = ({ product, selectedProducts, setSelectedProducts }) => {
  const theme = useTheme();
  const [amount, setAmount] = useState(0);

  const updateSelectedProducts = (product, newAmount) => {
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.title === product.title);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.title === product.title ? { ...p, amount: newAmount } : p
        );
      } else {
        return [...prevProducts, { ...product, amount: newAmount }];
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "260px",
        height: "140px",
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "100%",
          borderRadius: 3,
          border: `2px solid ${theme.palette.primary.main}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={product.icon}
          alt={product.title}
          sx={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          ml: 1.5,
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: 17,
            color: "white",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {product.price}
        </Typography>
        <Box sx={{ position: "absolute", bottom: 11, width: "100%" }}>
        <NumberPicker
            value={amount}
            onChange={(value) => {
              const newAmount = Math.max(value, 0);
              setAmount(newAmount);
              updateSelectedProducts(product, newAmount);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
