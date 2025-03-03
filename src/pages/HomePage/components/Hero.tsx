import { Box, Typography } from "@mui/material";
import Banner from "../../../components/Banner";
import Logo from "../../../components/Logo/Logo";

const Hero = () => {
  return (
    <Banner backgroundUrl="office_people_chatting_standing.jpg" overlay={true}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          pb: ["1rem", "3rem", "6rem", "8rem"],
        }}
      >
        <Box
          sx={{
            width: ["70%", "50%", "40%"],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: ["250px", "300px", "400px", "600px"] }}>
            <Logo color="white" />
          </Box>
          <Typography variant="h1" color="white" sx={{ textAlign: "center" }}>
            Uusi terveempi työaika
          </Typography>
        </Box>
      </Box>
    </Banner>
  );
};

export default Hero;
