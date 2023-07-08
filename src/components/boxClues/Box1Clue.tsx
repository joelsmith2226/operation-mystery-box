import React from "react";
import { styled, Typography } from "@mui/material";

const ClueText = styled(Typography)({
    textAlign: "left",
    maxWidth: "100%",
    width: "100%",
    whiteSpace: "nowrap",
    fontSize: "5vw",
    fontFamily: "'Signika Negative', sans-serif",
    position: "relative",
    color: "black",
  
    "@media (min-width: 600px)": {
      fontSize: "8vw",
    },
  
    "@media (min-width: 960px)": {
      fontSize: "8vw",
    },
    zIndex: 9999,
  });
  

export const Box1Clue: React.FC<{}> = () => {
    return (
    <ClueText variant="h5">
        Early in our story
        <br />
        Stealing looks across the room
        <br />
        Kold is this place
        <br />
        Your boy was nervous next to you
  </ClueText>
)};