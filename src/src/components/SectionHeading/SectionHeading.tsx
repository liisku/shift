import { SxProps } from "@mui/material";

import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  title: string;
  sectionId: string;
  sx?: SxProps;
}

const SectionHeading = (props: SectionHeadingProps) => {
  const { title, sectionId, sx } = props;
  return (
    <Box
      id={sectionId}
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 1) 100%) ",
        mt: 8,
        mb: 4,
        p: 4,
        ...sx,
      }}
    >
      <Typography variant="h2" sx={{ m: 0, textAlign: "center" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
