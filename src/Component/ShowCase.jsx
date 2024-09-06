
import { Box, Typography, Button ,Container,TextField} from "@mui/material";

export const ShowCase =()=>{
    return (
        <>
<Box sx={{ backgroundColor: "dark", color: "light", py: 5 }}>
        <Box sx={{ maxWidth: "lg", mx: "auto", px: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Text Section */}
            <Box>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
              >
                Become <span style={{ color: "#ffc107" }}>Web Developer</span>
              </Typography>
              <Typography variant="body1" sx={{ my: 4 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                earum quaerat? Ducimus, sequi debit nisi voluptatem non itaque
                doloribus, numquam mollitia fugiat illo a et ipsa dolor? Hic,
                quos debitis?
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  /* Open modal logic */
                }}
              >
                Start The Enrollment
              </Button>
            </Box>

            {/* Image Section */}
            <Box
              component="img"
              src="/Images/main icon.png"
              alt="Main Icon"
              sx={{
                width: { xs: "100%", sm: "50%", md: "30%", lg: "25%" },  // Adjust width for different screen sizes
    display: "block",
           mt:{xs:5}
  }}
            />
          </Box>
        </Box>
      </Box>
        </>
    )
}