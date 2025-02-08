import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem, IconButton, InputBase, Drawer, List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { Search, Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import ZEE5Logo from "../assets/ZEE5.png";

const Navbar = () => {
  const [moviesAnchor, setMoviesAnchor] = useState(null);
  const [tvAnchor, setTvAnchor] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMoviesOpen = (event) => setMoviesAnchor(event.currentTarget);
  const handleTvOpen = (event) => setTvAnchor(event.currentTarget);
  const handleClose = () => {
    setMoviesAnchor(null);
    setTvAnchor(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <Button color="inherit" onClick={handleMoviesOpen}>Movies</Button>
      <Menu anchorEl={moviesAnchor} open={Boolean(moviesAnchor)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Action</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Horror</MenuItem>
        <MenuItem onClick={handleClose}>Thriller</MenuItem>
      </Menu>

      <Button color="inherit" onClick={handleTvOpen}>TV Shows</Button>
      <Menu anchorEl={tvAnchor} open={Boolean(tvAnchor)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Reality</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Kids</MenuItem>
        <MenuItem onClick={handleClose}>Sports</MenuItem>
        <MenuItem onClick={handleClose}>News</MenuItem>
      </Menu>

      <Button color="inherit">Plans</Button>
      <Button color="inherit">Sports</Button>
    </>
  );

  const mobileMenuItems = (
    <List>
      <ListItem button onClick={handleMoviesOpen}>Movies</ListItem>
      <ListItem button onClick={handleTvOpen}>TV Shows</ListItem>
      <ListItem button>Plans</ListItem>
      <ListItem button>Sports</ListItem>
    </List>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1A0033", padding: "10px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box component="img" src={ZEE5Logo} alt="ZEE5" sx={{ height: 50 }} />

        {/* Mobile view */}
        {isMobile ? (
          <>
            {/* Search and Menu Icon */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {searchOpen && (
                <motion.div initial={{ width: 0 }} animate={{ width: "200px" }} exit={{ width: 0 }}>
                  <InputBase placeholder="Search..." sx={{ background: "#fff", borderRadius: "5px", padding: "5px" }} />
                </motion.div>
              )}
              <IconButton onClick={() => setSearchOpen(!searchOpen)} sx={{ color: "#fff" }}>
                <Search />
              </IconButton>

              <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Drawer for mobile menu */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250 }}>
                {mobileMenuItems}
              </Box>
            </Drawer>
          </>
        ) : (
          /* Desktop view */
          <>
            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems}
            </Box>

            {/* Search Box and Buy Plan Button */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {searchOpen && (
                <motion.div initial={{ width: 0 }} animate={{ width: "200px" }} exit={{ width: 0 }}>
                  <InputBase placeholder="Search..." sx={{ background: "#fff", borderRadius: "5px", padding: "5px" }} />
                </motion.div>
              )}
              <IconButton onClick={() => setSearchOpen(!searchOpen)} sx={{ color: "#fff" }}>
                <Search />
              </IconButton>

              <Button variant="contained" sx={{ bgcolor: "purple" }}>Buy Plan</Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
