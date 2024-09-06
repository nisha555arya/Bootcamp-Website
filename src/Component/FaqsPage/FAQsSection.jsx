import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { question: 'Where exactly are you located?' },
  { question: 'How much does it cost to attend?' },
  { question: 'What skills are required?' },
  { question: 'How do I sign up?' },
  { question: 'Do you help me find a job?' },
];

 export const FAQsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, dolore!';

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" id="questions" sx={{  py: 5, mt: '-2rem' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              my:2,
              
              boxShadow: '0px 4px 1px rgba(0, 0, 0, 0)',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              // sx={{ backgroundColor: 'lightgray'}}
              
            sx={{
                backgroundColor: expanded === `panel${index}` ? 'lightgrey' : 'transparent', // Change background color when expanded
                transition: 'background-color 0.3s ease-in-out',
              }}

            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{loremText}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};