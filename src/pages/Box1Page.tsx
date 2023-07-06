import React, { useEffect, useState } from "react";
import BoxArt from "../components/BoxArt";
import PhotoCollageGrid from "../components/PhotoCollageGrid";
import { Box, styled, Typography } from "@mui/material";

const ScrollableContainer = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: auto;
`;

const LoadingScreen = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  z-index: 9999;
  color: #ffffff;
  font-size: 24px;
`;

const Spacer = styled(Box)`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Clue = styled(Typography)({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  maxWidth: "80%",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "pre-wrap",
  fontSize: "6vw",
  fontFamily: "'Signika Negative', sans-serif",
  transition: "opacity 2s ease-in-out",

  "@media (min-width: 600px)": {
    fontSize: "3.5vw",
  },

  "@media (min-width: 960px)": {
    fontSize: "2vw",
  },

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
});

export const Box1Page: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen>Loading...</LoadingScreen>
      ) : (
        <ScrollableContainer>
          <BoxArt
            fileName="BOX1.gif"
            bibleVerse="7 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace 8 that he lavished on us. With all wisdom and understanding, 9 he[d] made known to us the mystery of his will according to his good pleasure, which he purposed in Christ, 10 to be put into effect when the times reach their fulfillment—to bring unity to all things in heaven and on earth under Christ. Ephesians 1:7-10"
          />
          <PhotoCollageGrid
            directoryPath={"BOX1"}
            totalImages={18}
            bodyText={
              "So this will be a test run of my first message to you. How does it look? something something blackheath hahaha"
            }
          />
          <Clue>
            <Typography
              variant="h3"
              color="white"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              BOX 2<br />
              <img
                src={require("../assets/boxIcon.png")}
                style={{ maxWidth: "25%" }}
              />
              <br />
              Clue
            </Typography>
          </Clue>
          <Spacer />
        </ScrollableContainer>
      )}
    </>
  );
};
