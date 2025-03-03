import { Box, SxProps, Typography } from "@mui/material";

interface HomeCrumbProps {
  title: string;
  subtitle: string;
  isScrolled: boolean;
}

const HomeCrumb: React.FC<HomeCrumbProps> = (props: HomeCrumbProps) => {
  const { title, subtitle, isScrolled } = props;

  const textStyle: SxProps = {
    mb: 0,
    textTransform: "uppercase",
    transition: "color 0.2s ease",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
    userSelect: "none",
    color: isScrolled ? "black" : "white",
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <Typography variant="body2" sx={{ ...textStyle, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ ...textStyle, display: ["none", "none", "block"] }}
      >
        <span style={{ marginLeft: "8px", marginRight: "8px" }}>|</span>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HomeCrumb;
