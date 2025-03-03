import { Box, SxProps, Typography } from "@mui/material";

interface FooterProps {
  id?: string;
  children?: React.ReactNode;
  sx?: SxProps;
}

const Footer = (props: FooterProps) => {
  const { id, children, sx } = props;

  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        mt: 2,
        py: 6,
        pb: 4,
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 1) 100%) ",
        ...sx,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>{children}</Box>
    </Box>
  );
};

export default Footer;
