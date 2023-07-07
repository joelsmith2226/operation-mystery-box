import React from "react";

import { Box, styled, Typography } from "@mui/material";

const ClueComp = styled(Typography)({
  textAlign: "center",
  maxWidth: "80%",
  width: "100%",
  whiteSpace: "pre-wrap",
  fontSize: "15vw",
  fontFamily: "'Signika Negative', sans-serif",
  position: "relative",
  color: "white",

  "@media (min-width: 600px)": {
    fontSize: "8vw",
  },

  "@media (min-width: 960px)": {
    fontSize: "8vw",
  },
  zIndex: 9999,
});

const OverlayContainer = styled(Box)({
  padding: "16px",
  marginLeft: "20%",
  marginRight: "20%",
  background: "rgba(0, 0, 0, 0.8)",
  borderRadius: "8px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
});

const BoxImg = styled("img")({
  border: "solid white 2px",
  borderRadius: "8px",
  zIndex: 9999,
  maxWidth: "25%",
  animation: "pulse 2s infinite",
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      filter: "brightness(100%)",
    },
    "50%": {
      transform: "scale(1.1)",
      filter: "brightness(110%)",
    },
    "100%": {
      transform: "scale(1)",
      filter: "brightness(100%)",
    },
  },
});

export const Clue: React.FC<{}> = () => {
  return (
    <OverlayContainer>
      <ClueComp>BOX 2</ClueComp>
      <BoxImg src={require("../assets/boxIcon.png")} />
      <ClueComp>Clue</ClueComp>
    </OverlayContainer>
  );
};
