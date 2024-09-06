
import { Box, Typography, Button ,Container,TextField} from "@mui/material";


export const NewsletterSec =()=>{
    return(
        <>
     <Box sx={{ backgroundColor: "primary.main", color: "white", py: 5 , marginTop:"7rem"  }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" sx={{ mb: { xs: 5, md: 0 } }}>
              Sign Up For Our Newsletter!
            </Typography>

            <Box sx={{ display: "flex", mb: 3 }}>
              <TextField
                label="Enter Email Address"
                variant="outlined"
                sx={{ backgroundColor: "white", borderRadius: 1 }}
                InputProps={{
                  sx: {  width:"25vw"},
                }}
              />

              <Button
                variant="contained"
                color="secondary"
                size="large"
              >
                Button
              </Button>
            </Box>
          </Box>
        </Container>
      </Box> 
        </>
    )
}