import { Box, createTheme } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import {
  Box1Page,
  Box2Page,
  Box3Page,
  Box4Page,
  Box5Page,
  Box6Page,
} from "./pages/BoxPages";
import { styled } from "@mui/material/styles";
import ContentsPage from "./pages/ContentsPage";

// Define the custom theme
const theme = createTheme({
  palette: {
    mode: "dark", // Use dark mode
    primary: {
      main: "#9FBCFF", // Use light sand green as the primary color
    },
    background: {
      default: "#111111", // Use a darker background color for the page
      paper: "#222222", // Use a darker background color for the container
    },
    // You can also define other colors such as secondary, error, warning, etc.
  },
  typography: {
    fontFamily: "Allan-Bold", // Use the custom font
  },
});
const Root = styled(Box)({
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  position: "fixed",
});

export const App: React.FC<{}> = () => {
  return (
    <Root>   
      <Router>
        <Routes>
          <Route path="/operation-mystery-box" element={<ContentsPage />} />
          <Route path="/operation-mystery-box/blackheath" element={<Box1Page />} />
          <Route path="/operation-mystery-box/esky" element={<Box2Page />} />
          <Route path="/operation-mystery-box/meadowbank" element={<Box3Page />} />
          <Route path="/operation-mystery-box/wharf" element={<Box4Page />} />
          <Route path="/operation-mystery-box/maxine" element={<Box5Page />} />
          <Route path="/operation-mystery-box/hill" element={<Box6Page />} />
        </Routes>
    </Router>
  </Root>
  );
};
