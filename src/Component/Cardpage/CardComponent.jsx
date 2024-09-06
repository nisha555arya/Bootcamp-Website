import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

export const CardComponent = ({ icon: Icon, title, text, btnColor }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#ccc',
        borderRadius: 2,
        boxShadow: 3,
        p: 3,
        textAlign: 'center',
        flex: 1, 
        minWidth: 0, 
      }}
    >
      <Box sx={{ fontSize: '3rem', mb: 2 }}>
        <Icon />
      </Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {text}
      </Typography>
      <Button variant="contained" color={btnColor}>
        Read More
      </Button>
    </Box>

    
  );
};