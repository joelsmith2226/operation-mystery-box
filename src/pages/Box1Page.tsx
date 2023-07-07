import React, { useEffect, useState } from "react";
import BoxArt from "../components/BoxArt";
import PhotoCollageGrid from "../components/PhotoCollageGrid";
import { Box, styled, Typography } from "@mui/material";
import { Clue } from "../components/Clue";

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
  display: block;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PhotoContainer = styled(Box)`
  position: relative;
  z-index: 1;
  min-height: 95vh;
`;

const ClueContainer = styled(Box)`
  position: relative;
  z-index: 9999;
`;

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
          <PhotoContainer>
            <PhotoCollageGrid
              directoryPath={"BOX1"}
              totalImages={18}
              bodyText={
                "So this will be a test run of my first message to you. How does it look? something something blackheath hahaha" +
                "So this will be a test run of my first message to you. How does it look? something something blackheath hahaha" +
                "So this will be a test run of my first message to you. How does it look? something something blackheath hahaha"
              }
            />
          </PhotoContainer>
          <ClueContainer>
            <Clue />
          </ClueContainer>
          <Spacer />
        </ScrollableContainer>
      )}
    </>
  );
};
