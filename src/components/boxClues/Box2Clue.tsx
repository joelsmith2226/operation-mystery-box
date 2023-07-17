import React, { useState } from "react";
import { Box, Button, Icon, IconButton, styled, Typography } from "@mui/material";
import { ArrowCircleDown } from "@mui/icons-material";

const ScrollableContainer = styled(Box)`
  width: 100%;
  height: 100%;
  // overflow: auto;
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const Image = styled("img")`
  max-width: 80vw;
  max-height: 30vh;
`;

const ClueText = styled(Typography)({
    fontSize: "4vw", // Set an initial font size based on viewport width
    fontFamily: "'Signika Negative', sans-serif",
});

const ScrollArrow = styled(IconButton)( ({
    scale: "2",
    position: "relative",
    bottom: "15%",
    transform: "translateX(-50%)",
    transition: "opacity 1s ease-in-out",
    animation: "fade-in 1s forwards, bounce 2s infinite",
    zIndex: 9999,
    color: "black",
    "@keyframes bounce": {
      "0%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-2px)",
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

const Box2Clue: React.FC = ({}) => {
  const [step, setStep] = useState(1);

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <ScrollableContainer>
        {step >= 1 && (
            <ContentContainer>
                <Button variant="contained" onClick={handleButtonClick}>
                 This is the view the next box has
                </Button>
            </ContentContainer>
        )}
        {step >= 2 && (
          <ContentContainer>
            <Image src={require("../../assets/BOX2/clue/3.jpg")} alt="Box Image" />
            <Button variant="contained" onClick={handleButtonClick}>
                Have another clue!
            </Button>
          </ContentContainer>
        )}
        {step >= 3 && (
            <ContentContainer>
                <ScrollArrow>
                    <ArrowCircleDown />
                </ScrollArrow>
                <ClueText variant="body1">
                    This was the place I first encountered your love of spreadsheets
                </ClueText>            
                <Button variant="contained" onClick={handleButtonClick}>
                    Hmm... Still stuck?
                </Button>
            </ContentContainer>
        )}
        {step >= 4 && (
            <ContentContainer>
                <ScrollArrow>
                    <ArrowCircleDown />
                </ScrollArrow>
                <ClueText variant="body1">
                    Fork & Spoon
                </ClueText>            
                <Button variant="contained" onClick={handleButtonClick}>
                    Fine I'll give you an easy clue :P
                </Button>
            </ContentContainer>
        )}
        {step >= 5 && (
            <ContentContainer>
                <ScrollArrow>
                    <ArrowCircleDown />
                </ScrollArrow>
                <ClueText variant="body1">
                    Chronologically, Box 1 = First feelings, Box 2 = First asking out, Box 3 = ?
                </ClueText>            
            </ContentContainer>
        )}
    </ScrollableContainer>
  );
};

export default Box2Clue;
