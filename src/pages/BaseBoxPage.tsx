import React, { useEffect, useState } from "react";
import BoxArt, { BoxArtProps } from "../components/BoxArt";
import PhotoCollageGrid, {
  PhotoCollageProps,
} from "../components/PhotoCollageGrid";
import { Box, CircularProgress, styled, Typography } from "@mui/material";
import { Clue } from "../components/Clue";
import { TextBoxText } from "../components/TextBoxText";

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
  flex-direction: column;
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

const LoadingBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface BaseBoxPageProps {
  boxArtProps: BoxArtProps;
  photoCollageProps: PhotoCollageProps;
}

export const BaseBoxPage: React.FC<BaseBoxPageProps> = ({
  boxArtProps,
  photoCollageProps,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen>
          <TextBoxText Text1={"Operation"} Text2={"Mystery Box"} />
          <LoadingBox>
            <Typography
              style={{
                fontFamily: "'Signika Negative', sans-serif",
                padding: "8px",
                fontSize: "4vw",
              }}
            >
              Loading
            </Typography>
            <CircularProgress color="secondary" />
          </LoadingBox>
        </LoadingScreen>
      ) : (
        <ScrollableContainer>
          <BoxArt
            fileName={boxArtProps.fileName}
            bibleVerse={boxArtProps.bibleVerse}
            boxName={boxArtProps.boxName}
            boxNumber={boxArtProps.boxNumber}
          />
          <PhotoContainer>
            <PhotoCollageGrid
              directoryPath={photoCollageProps.directoryPath}
              totalImages={photoCollageProps.totalImages}
              bodyText={photoCollageProps.bodyText}
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
