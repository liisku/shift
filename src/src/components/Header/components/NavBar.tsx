import { Box, SxProps, Typography } from "@mui/material";
import { MenuNavItem } from "../types";

interface NavBarProps {
  menuItems: MenuNavItem[];
  isScrolled: boolean;
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const { menuItems, isScrolled } = props;

  const navLinkStyle: SxProps = {
    mb: 0,
    textTransform: "uppercase",
    transition: "color 0.2s ease",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
    userSelect: "none",
    color: isScrolled ? "primary.main" : "white",
  };

  if (menuItems.length === 0) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      {menuItems.map((menuItem, index) => (
        <Typography
          variant="body2"
          sx={{ ...navLinkStyle, mr: index === menuItems.length - 1 ? 0 : 1 }}
          onClick={() => {
            window.scrollTo({
              top: (document.getElementById(menuItem.id)?.offsetTop ?? 0) - 48,
              behavior: "smooth",
            });
          }}
        >
          {menuItem.title}
        </Typography>
      ))}
    </Box>
  );
};

export default NavBar;
