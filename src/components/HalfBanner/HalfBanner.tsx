import { Box, SxProps } from "@mui/material";

interface HalfBannerProps {
  imageSide?: "left" | "right";
  imageUrl: string;
  imageAltText?: string;
  children: React.ReactNode;
  sx?: SxProps;
}

const HalfBanner = (props: HalfBannerProps) => {
  const { imageUrl, imageAltText, children, sx, imageSide = "left" } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: [
          "column",
          "column",
          imageSide === "left" ? "row-reverse" : "row",
        ],
        gap: 2,
        width: "100%",
        maxWidth: "1200px",
        overflow: "hidden",
        mx: "auto",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: ["100%", "100%", "50%"],
          height: ["content", "content", "inherit"],
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 2,
        }}
      >
        {children}
      </Box>
      <Box sx={{ width: ["100%", "100%", "50%"], height: "100%" }}>
        <img src={imageUrl} alt={imageAltText} width="100%" />
      </Box>
    </Box>
  );
};

export default HalfBanner;
