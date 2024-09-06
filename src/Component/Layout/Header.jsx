import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Box, Typography, Button, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; // Import the menu icon

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box component="header" sx={{ backgroundColor: '#111', py: 5, mt:'-1rem' }}>
      {/* Navbar Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        {/* Brand Section */}
        <Typography variant="h5" component={NavLink} to="/" sx={{ textDecoration: 'none', color: '#fff' }}>
          Frontend Bootcamp
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <NavLink to="/" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#fff',
            margin: '0 8px', // Adjust spacing if needed
            fontWeight: isActive ? 'bold' : 'normal',
          })}>
            Home
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#fff',
            margin: '0 8px', // Adjust spacing if needed
            fontWeight: isActive ? 'bold' : 'normal',
          })}>
            What You'll Learn
          </NavLink>
          <NavLink to="/movie" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#fff',
            margin: '0 8px', // Adjust spacing if needed
            fontWeight: isActive ? 'bold' : 'normal',
          })}>
            Questions/Instructors
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#fff',
            margin: '0 8px', // Adjust spacing if needed
            fontWeight: isActive ? 'bold' : 'normal',
          })}>
            Contact
          </NavLink>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for mobile menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}
          PaperProps={{ sx: { height: 'auto', minHeight: '20%' } }}>
          <List sx={{ width: 250, background: "black" }}>
            <NavLink to="/" style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : '#fff',
              padding: '8px 16px',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? '#333' : 'transparent',
            })} onClick={toggleDrawer(false)}>
              <ListItem>
                Home
              </ListItem>
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : '#fff',
              padding: '8px 16px',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? '#333' : 'transparent',
            })} onClick={toggleDrawer(false)}>
              <ListItem>
              What You'll Learn
              </ListItem>
            </NavLink>
            <NavLink to="/movie" style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : '#fff',
              padding: '8px 16px',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? '#333' : 'transparent',
            })} onClick={toggleDrawer(false)}>
              <ListItem>
              Questions/Instructors
              </ListItem>
            </NavLink>
            <NavLink to="/contact" style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : '#fff',
              padding: '8px 16px',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? '#333' : 'transparent',
            })} onClick={toggleDrawer(false)}>
              <ListItem>
                Contact
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};