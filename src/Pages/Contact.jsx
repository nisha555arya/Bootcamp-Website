import { Box, Container, Typography, List, ListItem } from '@mui/material';

const contactInfo = [
  { label: 'Main Location:', value: '32, Main Street LA' },
  { label: 'Enrollment Phone:', value: '(555)-555-5585' },
  { label: 'Student Phone:', value: '(888)-888-8888' },
  { label: 'Enrollment Email:', value: 'abc@gmail.com' },
  { label: 'Student Email:', value: 'xyz@gmail.com' },
];

export const Contact = () => {
  return (
    <Box component="section" sx={{ py: 5 }}>
      <Container sx={{ width: '75%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Info
        </Typography>
        <Box display="flex" justifyContent="center">
          <List sx={{ width: '100%' }}>
            {contactInfo.map((info, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  py: 2,
                  boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 'bold', mr: 1 }}>
                    {info.label}
                  </Typography>
                  <Typography>{info.value}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};