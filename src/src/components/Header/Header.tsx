import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HomeCrumb from "./components/HomeCrumb";
import NavBar from "./components/NavBar";
import { MenuNavItem } from "./types";

interface HeaderProps {
  title: string;
  subtitle: string;
  menuItems: MenuNavItem[];
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title, subtitle, menuItems } = props;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        zIndex: 100,
        backgroundColor: isScrolled ? "white" : "transparent",
        backgroundImage: isScrolled
          ? "white"
          : "linear-gradient(to bottom, rgba(64, 64, 64, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
        transition: "background-color background-image 0.3s ease",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <HomeCrumb title={title} subtitle={subtitle} isScrolled={isScrolled} />
      <NavBar menuItems={menuItems} isScrolled={isScrolled} />
    </Box>
  );
};

export default Header;
