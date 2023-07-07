import React, { useState } from "react";
import { Box, styled, Typography, Dialog, DialogContent } from "@mui/material";

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
  maxWidth: "40%",
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
  cursor: "pointer",
});

export const Clue: React.FC<{}> = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <OverlayContainer>
        <ClueComp>BOX 2</ClueComp>
        <BoxImg src={require("../assets/boxIcon.png")} onClick={handleClick} />
        <ClueComp>Clue</ClueComp>
      </OverlayContainer>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent>
          <ClueText variant="h5">
            Early in our story
            <br />
            Stealing looks across the room
            <br />
            Kold is this place
            <br />
            Your boy was nervous next to you
          </ClueText>
        </DialogContent>
      </Dialog>
    </>
  );
};
