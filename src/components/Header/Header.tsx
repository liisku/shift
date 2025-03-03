import React, { useState, useEffect } from "react";
import { Box, SxProps, Typography } from "@mui/material";

const Header: React.FC = () => {
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

  // This function will locate the element with the given id,
  // and then smoothly scrolls to it. It will also offset the
  // scroll position by 48px to account for the header height.
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 48;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const commonLinkStyle: SxProps = {
    textTransform: "uppercase",
    transition: "color 0.2s ease",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
    userSelect: "none",
  };

  const homeLinkStyle: SxProps = {
    ...commonLinkStyle,
    color: isScrolled ? "black" : "white",
  };

  const navLinkStyle: SxProps = {
    ...commonLinkStyle,
    color: isScrolled ? "primary.main" : "white",
  };

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
        padding: "0 24px",
        zIndex: 100,
        backgroundColor: isScrolled ? "white" : "transparent",
        backgroundImage: isScrolled
          ? "white"
          : "linear-gradient(to bottom, rgba(64, 64, 64, 0.4) 0%, rgba(0, 0, 0, 0) 100%)",
        transition: "background-color 0.2s ease",
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      {/* SHIFT | Uusi terveempi työaika */}
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Typography variant="h6" sx={{ ...homeLinkStyle, fontWeight: "bold" }}>
          SHIFT
        </Typography>
        <Typography
          variant="h6"
          sx={{ ...homeLinkStyle, display: ["none", "none", "block"] }}
        >
          <span style={{ marginLeft: "8px", marginRight: "8px" }}>|</span>
          Uusi terveempi työaika
        </Typography>
      </Box>

      {/* Palvelumme | Meistä | Yhteystiedot */}
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          sx={{ ...navLinkStyle, marginRight: "16px" }}
          onClick={() => {
            window.scrollTo({
              top: (document.getElementById("services")?.offsetTop ?? 0) - 48,
              behavior: "smooth",
            });
          }}
        >
          Palvelumme
        </Typography>
        <Typography
          variant="h6"
          sx={{ ...navLinkStyle, marginRight: "16px" }}
          onClick={() => {
            window.scrollTo({
              top: (document.getElementById("about")?.offsetTop ?? 0) - 48,
              behavior: "smooth",
            });
          }}
        >
          Meistä
        </Typography>
        <Typography
          variant="h6"
          sx={navLinkStyle}
          onClick={() => {
            window.scrollTo({
              top: document.getElementById("contacts")?.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          Yhteystiedot
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
