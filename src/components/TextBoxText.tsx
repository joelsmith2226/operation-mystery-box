import React from "react";
import { styled, Typography, Box } from "@mui/material";

const Texty = styled(Typography)(({ fontSize }: { fontSize: string }) => ({
  textAlign: "center",
  maxWidth: "100%",
  width: "100%",
  whiteSpace: "pre-wrap",
  fontSize,
  fontFamily: "'Signika Negative', sans-serif",
  position: "relative",
  color: "white",

  "@media (min-width: 600px)": {
    fontSize,
  },

  "@media (min-width: 960px)": {
    fontSize,
  },
  zIndex: 9999,
}));

const BoxImg = styled("img")({
  border: "solid white 2px",
  borderRadius: "8px",
  zIndex: 9999,
  maxWidth: "40%",
  animation: "pulse 2s infinite",
  objectFit: "cover", // Maintain aspect ratio and crop if necessary

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

const Container = styled(Box)({
  padding: "16px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
});

interface TextBoxTextProps {
  Text1: string;
  Text2: string;
  animate?: boolean;
  fontSize?: string;
}

export const TextBoxText: React.FC<TextBoxTextProps> = ({
  Text1,
  Text2,
  animate = true,
  fontSize = "15vw",
}) => {
  return (
    <Container>
      <Texty fontSize={fontSize}>{Text1}</Texty>
      <BoxImg
        src={require("../assets/boxIcon.png")}
        style={{ animation: animate ? "pulse 2s infinite" : "none" }}
      />
      <Texty fontSize={fontSize}>{Text2}</Texty>
    </Container>
  );
};
