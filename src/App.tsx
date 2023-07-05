import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Box1Page } from "./pages/Box1Page";
import Root from "./routes/root";
import { styled } from "@mui/material/styles";

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

const router = createBrowserRouter([
  {
    path: "*",
    element: <Box1Page />,
  },
]);

export const App: React.FC<{}> = () => {
  const Root = styled(Box)({
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    position: "fixed",
  });

  return (
    <Root>
      <RouterProvider router={router} />
    </Root>
  );
};
