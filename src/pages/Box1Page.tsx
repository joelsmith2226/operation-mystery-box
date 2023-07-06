import React from "react";
import BoxArt from "../components/BoxArt";
import PhotoCollageGrid from "../components/PhotoCollageGrid";
import { Box, styled } from "@mui/material";

const ScrollableContainer = styled(Box)({
  height: "100vh", // Set the height to 100% of the viewport height
  overflow: "auto", // Enable vertical scrolling
});

export const Box1Page: React.FC<{}> = () => {
  return (
    <ScrollableContainer>
      <BoxArt
        fileName="BOX1.gif"
        bibleVerse="7 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace 8 that he lavished on us. With all wisdom and understanding, 9 he[d] made known to us the mystery of his will according to his good pleasure, which he purposed in Christ, 10 to be put into effect when the times reach their fulfillment—to bring unity to all things in heaven and on earth under Christ. Ephesians 1:7-10"
      />
      <PhotoCollageGrid directoryPath={"BOX1"} totalImages={18} />
    </ScrollableContainer>
  );
};
