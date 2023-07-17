import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { TextBoxText } from "./TextBoxText";

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "110vh",
  display: "flex",
  justifyContent: "center",
});

const Image = styled("img")(({ showOverlay }: { showOverlay: boolean }) => ({
  maxWidth: "100%",
  maxHeight: "30%",
  objectFit: "cover", // Maintain aspect ratio and crop if necessary
  // marginLeft: "-5%",
  opacity: showOverlay ? 0.5 : 1,
  transition: "opacity 0.5s ease-in-out",
  animation: showOverlay ? "fadeOut 1s forwards" : "fadeIn 1s forwards",

  "@keyframes fadeIn": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },

  "@keyframes fadeOut": {
    "0%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0.5",
    },
  },
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
    fontSize: "4.8vw", // Set an initial font size based on viewport width
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
const BoxTitle = styled(Typography)(({ showText }: { showText: boolean }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  maxWidth: "80%",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "pre-wrap",
  fontFamily: "'Signika Negative', sans-serif",
  opacity: showText ? 1 : 0,
  transition: "opacity 2s ease-in-out",
  animation: `${showText ? "fade-in 1s forwards" : "fade-out 1s forwards"}`,

  "@keyframes fade-in": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  "@keyframes fade-out": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

const ScrollArrow = styled(IconButton)(
  ({ showArrow }: { showArrow: boolean }) => ({
    scale: "3",
    position: "absolute",
    bottom: "15%",
    transform: "translateX(-50%)",
    opacity: showArrow ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    animation: showArrow ? "fade-in 1s forwards, bounce 2s infinite" : "none",
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
    "&.fade-in": {
      animation: "fadeIn 1s forwards",
    },
  })
);

const CustomDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    background: "transparent",
    boxShadow: "none",
  },
  "& .MuiDialog-paperScrollPaper": {
    maxHeight: "95vh",
  },
});

const CustomDialogContent = styled(DialogContent)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  height: "vh",
  width: "75vw",
});


const DialogImageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const DialogImage = styled("img")({
  // maxWidth: "100%",
  // maxHeight: "100%",
  objectFit: "contain",
});
export interface BoxArtProps {
  fileName: string;
  bibleVerse: string[];
  boxName: string;
  boxNumber: string;
}

const BoxArt: React.FC<BoxArtProps> = ({
  fileName,
  bibleVerse,
  boxName,
  boxNumber,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showText, setShowText] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleScroll = () => {
    const halfViewportHeight = window.innerHeight / 2;
    window.scrollTo({
      top: window.pageYOffset + halfViewportHeight,
      behavior: "smooth",
    });
  };

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
        onClick={() => setOpenDialog(true)}
      />
      <BoxTitle showText={showText}>
        <TextBoxText
          Text1={boxNumber}
          Text2={boxName}
          fontSize="12vw"
          animate={false}
        />
      </BoxTitle>

      {showOverlay && (
        <Overlay showOverlay={showOverlay} variant="h4" color="white">
          {bibleVerse.map((val) => (
            <p>{val}</p>
          ))}        
          </Overlay>
      )}
      {showArrow && (
        <ScrollArrow showArrow={showArrow} onClick={handleScroll}>
          <ArrowDownward />
        </ScrollArrow>
      )}

      <CustomDialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <CustomDialogContent>
          <DialogImageContainer><DialogImage src={require(`../assets/${fileName}`)} alt="Image" /></DialogImageContainer>
        </CustomDialogContent>
      </CustomDialog>
    </ImageContainer>
  );
};
export default BoxArt;
