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

const OverlayContainer = styled(Box)({
  padding: "16px",
  marginLeft: "20%",
  marginRight: "20%",
  background: "rgba(0, 0, 0, 0.8)",
  border: "1px solid white",
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
  maxWidth: "30vw",
  maxHeight: "30vw",
  objectFit: "contain", // Adjust to "contain" instead of "cover"
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

const ScaledDialogContent = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  overflowX: "hidden",
});

export interface ClueProps  {
  boxNumber: string;
  clue: JSX.Element;
}
export const Clue: React.FC<ClueProps> = ({boxNumber, clue}) => {
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
        <ClueComp>{boxNumber}</ClueComp>
        <BoxImg src={require("../assets/boxIcon.png")} onClick={handleClick} />
        <ClueComp>Clue</ClueComp>
      </OverlayContainer>
      <Dialog open={openDialog} onClose={handleClose}>
        <ScaledDialogContent>
          {clue}
        </ScaledDialogContent>
      </Dialog>
    </>
  );
};

export default Clue;
