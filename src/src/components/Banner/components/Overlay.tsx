import React from "react";
import { Box, SxProps } from "@mui/material";

interface OverlayProps {
  overlay?: boolean;
  sx?: SxProps;
}

const Overlay: React.FC<OverlayProps> = ({ overlay = false, sx }) => {
  if (!overlay) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: [
          "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(248,99,26,0) 50%, rgba(248,99,26,0.7) 85%, rgba(248,99,26,0.9) 100%)," +
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,160,160,0.2) 45%, rgba(160,160,160,0.7) 85%, rgba(160,160,160,0.9) 100%)",
          "linear-gradient(130deg, rgba(255,255,255,0) 0%, rgba(248,99,26,0) 50%, rgba(248,99,26,0.7) 85%, rgba(248,99,26,0.9) 100%)," +
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,160,160,0.2) 45%, rgba(160,160,160,0.7) 85%, rgba(160,160,160,0.9) 100%)",
          "linear-gradient(140deg, rgba(255,255,255,0) 0%, rgba(248,99,26,0) 50%, rgba(248,99,26,0.7) 85%, rgba(248,99,26,0.9) 100%)," +
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,160,160,0.2) 45%, rgba(160,160,160,0.7) 85%, rgba(160,160,160,0.9) 100%)",
          "linear-gradient(150deg, rgba(255,255,255,0) 0%, rgba(248,99,26,0) 50%, rgba(248,99,26,0.7) 85%, rgba(248,99,26,0.9) 100%)," +
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,160,160,0.2) 45%, rgba(160,160,160,0.7) 85%, rgba(160,160,160,0.9) 100%)",
        ],
        ...sx,
      }}
    />
  );
};

export default Overlay;
