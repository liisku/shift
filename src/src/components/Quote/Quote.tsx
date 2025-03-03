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
        h4: {
          mb: 0,
          fontStyle: "italic",
        },
        borderRadius: 2,
        ...sx,
      }}
    >
      <Typography variant="h4" color={color}>
        {children}
      </Typography>
    </Box>
  );
};

export default Quote;
