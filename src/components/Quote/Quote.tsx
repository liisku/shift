import React from "react";
import { Box, Typography, SxProps } from "@mui/material";
interface QuoteProps {
  children: string | React.ReactNode;
  color?: string;
  backgroundColor?: string;
  sx?: SxProps;
}

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
  const { children, color = "black", backgroundColor = "grey.200", sx } = props;

  return (
    <Box
      sx={{
        m: 2,
        px: 4,
        py: 4,
        backgroundColor: backgroundColor,
        h3: {
          marginBottom: 0,
          fontStyle: "italic",
        },
        ...sx,
      }}
    >
      <Typography variant="h3" color={color}>
        {children}
      </Typography>
    </Box>
  );
};

export default Quote;
