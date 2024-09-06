
import { Box, Container } from '@mui/material';
import { CardComponent } from './CardComponent';
import { CardData } from './CardData'; // Ensure this matches the export from CardData.js

export const Cardsection = () => {
  return (
    <Box component="section" sx={{ py: 5 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            textAlign: 'center',
          }}
        >
          {CardData.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};