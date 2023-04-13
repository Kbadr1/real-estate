import React from "react";
import Navbar from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "poppins",
    },
  },
  palette: {
    primaryText: "#071C1F",
    secondaryText: "#5c727d",
    orange: "#FF5A3C",
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
