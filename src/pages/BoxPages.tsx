import React from "react";
import { BoxArtProps } from "../components/BoxArt";
import { BaseBoxPage } from "./BaseBoxPage";
import { PhotoCollageProps } from "../components/PhotoCollageGrid";

export const Box1Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX1.gif",
    bibleVerse:
      "7 In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace 8 that he lavished on us. With all wisdom and understanding, 9 he[d] made known to us the mystery of his will according to his good pleasure, which he purposed in Christ, 10 to be put into effect when the times reach their fulfillment—to bring unity to all things in heaven and on earth under Christ. Ephesians 1:7-10",
    boxName: "Blackheath",
    boxNumber: "Box 1",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX1",
    totalImages: 18,
    bodyText: [
      "Well, the cat's out of the box now! I've learnt a few new tricks these past few months that I have done my best at hiding from you... I wonder how many of these you knew about 😅",
      "Anyho, this is our first trip down memory lane: Blackheath. The first place where this boy became googly eyed over a certain meringue girl. From book shops to burger making buds, this was a time that I well and truly began full crushing over you",
    ],
  };

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
    />
  );
};

export const Box2Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX2.png",
    bibleVerse: "This is a verse from ISAIAH 6",
    boxName: "Esky",
    boxNumber: "Box 2",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX2",
    totalImages: 13,
    bodyText: ["First time I asked you out"],
  };

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
    />
  );
};

export const Box3Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX3.png",
    bibleVerse: "This is a verse from ROMANS 8",
    boxName: "Meadowbank",
    boxNumber: "Box 3",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX3",
    totalImages: 14,
    bodyText: ["First date"],
  };

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
    />
  );
};

export const Box4Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX4.png",
    bibleVerse: "This is a verse from PROVERBS 31",
    boxName: "Wharf",
    boxNumber: "Box 4",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX4",
    totalImages: 15,
    bodyText: ["First timeline"],
  };
  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
    />
  );
};

export const Box5Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX5.png",
    bibleVerse: "This is a verse from GEN 1",
    boxName: "Maxine",
    boxNumber: "Box 5",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX5",
    totalImages: 18,
    bodyText: ["First kiss/I love you"],
  };

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
    />
  );
};

export const Box6Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX6.png",
    bibleVerse: "This is a verse from 1 PETER",
    boxName: "Hill",
    boxNumber: "Box 6",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX6",
    totalImages: 1,
    bodyText: ["nice"],
  };
  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
    />
  );
};
