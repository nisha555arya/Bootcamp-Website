

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // MUI icon for the chevron

export const About = () => {
  return (
    <>
    <Box id="learn" sx={{ py: 5}}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
            mt:3,
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="./Images/main icon.png"
              alt="Main Icon"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              p: 5
            }}
          >
            <Typography variant="h4" gutterBottom>
              Learn The Fundamentals
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis fugit, cupiditate ipsam, quod accusantium ex corporis
              ut nesciunt obcaecati eaque suscipit, vero omnis incidunt. Excepturi voluptate id soluta error inventore!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea labore expedita tempore error eos esse eligendi quibusdam consectetur.
              Animi nesciunt hic enim odio eligendi aut error! Unde dolorum dicta voluptates.
            </Typography>
            <Button
              variant="contained"
              color="primary" 
              startIcon={<ArrowForwardIcon />}
              sx={{ mt: 3 }}
              href="#"
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>



 <Box
      id="learn"
      sx={{ py: 5, backgroundColor: 'dark', color: 'light', minHeight: '100vh'  }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="./Images/images.jfif"
              alt="React Learning"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              p: 5
            }}
          >
            <Typography variant="h4" gutterBottom>
              Learn React
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis fugit, cupiditate ipsam, quod accusantium ex corporis
              ut nesciunt obcaecati eaque suscipit, vero omnis incidunt. Excepturi voluptate id soluta error inventore!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea labore expedita tempore error eos esse eligendi quibusdam consectetur.
              Animi nesciunt hic enim odio eligendi aut error! Unde dolorum dicta voluptates.
            </Typography>
            <Button
              variant="contained"
              color="primary" 
              startIcon={<ArrowForwardIcon />}
              sx={{ mt: 3 }}
              href="#"
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    </>
  );
};