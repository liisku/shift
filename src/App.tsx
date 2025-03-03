import React from "react";
import HomePage from "./pages/HomePage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
