import React from "react";
import { Box, SxProps } from "@mui/material";
import Overlay from "./components/Overlay";
import Logo from "../Logo/Logo";
interface BannerProps {
  backgroundUrl?: string;
  overlay?: boolean;
  sx?: SxProps;
  children: React.ReactNode;
  showLogo?: boolean;
  logoColor?: "white" | "black";
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const {
    backgroundUrl,
    overlay = false,
    sx,
    children,
    showLogo = false,
    logoColor = "white",
  } = props;

  const backgroundStyles: SxProps = backgroundUrl
    ? {
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundColor: "grey.300",
      };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: ["35vh", "50vh", "80vh", "100vh"],
        p: 0,
        ...backgroundStyles,
        ...sx,
      }}
    >
      <Overlay overlay={overlay} />
      {showLogo && <Logo color={logoColor} />}
      <Box
        sx={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Banner;
