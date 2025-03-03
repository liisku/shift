import { Box, SxProps } from "@mui/material";
import Quote from "../../../components/Quote/Quote";

import { Typography } from "@mui/material";

interface AboutMeProps {
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  texts: string[];
  sx?: SxProps;
}

const AboutMe = (props: AboutMeProps) => {
  const { name, role, imageUrl, quote, texts, sx } = props;

  const imageContent = (
    <Box
      sx={{
        width: ["70%", "50%", "30%", "30%"],
        px: 2,
      }}
    >
      <img src={imageUrl} width="100%" style={{ borderRadius: "50%" }} />
    </Box>
  );

  return (
    <Box sx={sx}>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
          mb: 4,
        }}
      >
        {imageContent}
        <Box
          sx={{
            width: ["100%", "100%", "70%"],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" color="primary">
            {name}
          </Typography>

          <Typography variant="body1">{role}</Typography>

          <Quote backgroundColor="primary.main" color="white" sx={{ ml: 0 }}>
            {quote}
          </Quote>
        </Box>
      </Box>
      {texts.map((text) => (
        <Typography variant="body1" sx={{ mb: 1 }}>
          {text}
        </Typography>
      ))}
    </Box>
  );
};

export default AboutMe;
