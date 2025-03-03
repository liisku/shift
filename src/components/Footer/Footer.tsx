import { Box, Typography } from "@mui/material";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        py: 6,
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 1) 100%) ",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4 }}>
        <Typography variant="h3" color="primary">
          Yhteystiedot
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 6 }}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Liis Kukkonen
              </Typography>
              <Typography variant="body1">liis@shiftvalmennus.fi</Typography>
              <Typography variant="body1">+358 44 0522506</Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Petter Kukkonen
              </Typography>
              <Typography variant="body1">petter@shiftvalmennus.fi</Typography>
              <Typography variant="body1">+358 44 1234567</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ width: "160px", mt: 4, ml: -1.5, mb: -1 }}>
            <Logo color="black" fill="white" />
          </Box>
          <Typography variant="body2">Uusi terveempi työaika</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
