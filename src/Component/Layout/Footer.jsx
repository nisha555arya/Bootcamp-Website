import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

 export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        backgroundColor: '#111',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        height:'20vh'
      }}
    >
      <Container>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          &copy; 2021 Bootstrap Project
        </Typography>
        <IconButton
          href="#"
          color="inherit"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            p: 5,
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: '2.5rem' , borderRadius: '50%', 
    border: '2px solid #fff', 
    width: '2.5rem', 
    height: '2.5rem', 
    padding: '0.5rem',
    mt:2}} />
        </IconButton>
      </Container>
    </Box>
  );
};

