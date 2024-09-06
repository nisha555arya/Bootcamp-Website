import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const instructors = [
  {
    name: 'John Roe',
    imgSrc: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    name: 'Lisa Smith',
    imgSrc: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    name: 'Steve Smith',
    imgSrc: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'Hail Rason',
    imgSrc: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

const bio = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo labore numquam, a ipsa incidunt iusto!';

export const InstructorsSection = () => {
  return (
    <Box component="section" id="instructors" sx={{ py: 5, backgroundColor: 'primary.main' }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ color: 'white', mb: 3 }}>
          Our Instructors
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'white', mb: 5 }}>
          Our instructors have more than 5 years of working experience in the IT industry.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {instructors.map((instructor, index) => (
            <Box key={index} sx={{ width: { xs: '100%', sm: '45%', md: '22%' } }}>
              <Card sx={{ p: 3, backgroundColor: 'background.paper' }}>
                <CardMedia
                  component="img"
                  src={instructor.imgSrc}
                  alt={instructor.name}
                  sx={{ borderRadius: '50%', width: 120, height: 120, margin: '0 auto' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    {instructor.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {bio}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton color="inherit" href="#">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};