import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
});

const Image = styled("img")(({ showOverlay }: { showOverlay: boolean }) => ({
  maxWidth: "100%",
  maxHeight: "30%",
  opacity: showOverlay ? 0.5 : 1,
  transition: "opacity 0.5s ease-in-out",
}));

const Overlay = styled(Typography)(
  ({ showOverlay }: { showOverlay: boolean }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    opacity: showOverlay ? 1 : 0,
    transition: "opacity 2s ease-in-out",
    maxWidth: "80%",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    fontSize: "4vw", // Set an initial font size based on viewport width
    fontFamily: "'Signika Negative', sans-serif",

    "@media (min-width: 600px)": {
      fontSize: "3.5vw", // Adjust font size for larger screens
    },
    "@media (min-width: 960px)": {
      fontSize: "2vw", // Adjust font size for even larger screens
    },
    animation: "fadeIn 1s forwards",

    "@keyframes fadeIn": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
  })
);

const BoxTitle = styled(Typography)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  transition: "opacity 2s ease-in-out",
  maxWidth: "80%",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "pre-wrap",
  fontSize: "6vw", // Set an initial font size based on viewport width
  fontFamily: "'Signika Negative', sans-serif",

  "@media (min-width: 600px)": {
    fontSize: "3.5vw", // Adjust font size for larger screens
  },
  "@media (min-width: 960px)": {
    fontSize: "2vw", // Adjust font size for even larger screens
  },
  animation: "fadeOut 5s forwards",

  "@keyframes fadeOut": {
    "0%": {
      opacity: "1",
    },
    "80%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
    },
  },
});

const ScrollArrow = styled(IconButton)(
  ({ showArrow }: { showArrow: boolean }) => ({
    scale: "3",
    position: "absolute",
    bottom: "16px",
    transform: "translateX(-50%)",
    opacity: showArrow ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    animation: showArrow ? "bounce 2s infinite" : "none",
    zIndex: 9999,
    color: "white",
    "@keyframes bounce": {
      "0%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-16px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  })
);

interface BoxArtProps {
  fileName: string;
  bibleVerse: string;
}

const BoxArt: React.FC<BoxArtProps> = ({ fileName, bibleVerse }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
      setShowText(false);
    }, 5000);
    const arrowTimer = setTimeout(() => {
      setShowArrow(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(arrowTimer);
    };
  }, []);

  return (
    <ImageContainer>
      <Image
        showOverlay={showOverlay}
        src={require(`../assets/${fileName}`)}
        alt="Image"
      />
      {showText && (
        <BoxTitle>
          <Typography
            variant="h3"
            color="white"
            style={{ animation: "fade-out 0.5s forwards", fontFamily: "'Signika Negative', sans-serif",
 }}
          >
            BOX 1<br />
            <img src={require("../assets/boxIcon.png")} style={{maxWidth: "25%"}} />
            <br />
            BLACKHEATH
          </Typography>
        </BoxTitle>
      )}
      {showOverlay && (
        <Overlay showOverlay={showOverlay} variant="h4" color="white">
          {bibleVerse}
        </Overlay>
      )}
      {showArrow && (
        <ScrollArrow
          showArrow={showArrow}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowDownward />
        </ScrollArrow>
      )}
    </ImageContainer>
  );
};

export default BoxArt;
