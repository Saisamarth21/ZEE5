import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Plans from "../components/Plans";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#1A0033", minHeight: "200vh", color: "white" }}>
      <Navbar />
      <Box sx={{ padding: "20px" }}>
        <Carousel />
        <Plans />
      </Box>
    </Box>
  );
};

export default Home;
