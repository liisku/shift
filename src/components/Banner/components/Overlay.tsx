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
        background:
          "linear-gradient(90deg, rgba(248,99,26,0) 0%, rgba(248,99,26,0) 30%, rgba(248,99,26,0.6) 80%, rgba(248,99,26,0.7) 100%)",
        ...sx,
      }}
    />
  );
};

export default Overlay;
