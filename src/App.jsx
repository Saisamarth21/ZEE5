import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Plans from "./components/Plans";
import './App.css';

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#1A0033", minHeight: "150vh", color: "#fff", paddingLeft:  "10px", paddingRight:  "10px", paddingBottom: "20px" }}>
      <Navbar />
      <Carousel />
      <Plans />
    </Box>
  );
};

export default App;
