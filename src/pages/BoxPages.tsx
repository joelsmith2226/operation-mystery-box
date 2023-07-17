import React from "react";
import { BoxArtProps } from "../components/BoxArt";
import { BaseBoxPage } from "./BaseBoxPage";
import { PhotoCollageProps } from "../components/PhotoCollageGrid";
import { ClueProps } from "../components/Clue";
import { Box1Clue } from "../components/boxClues/Box1Clue";
import Wordle from "../components/boxClues/Box3Clue";
import Box4Clue from "../components/boxClues/Box4Clue";
import Box2Clue from "../components/boxClues/Box2Clue";
import Box5Clue from "../components/boxClues/Box5Clue";

export const Box1Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX1.gif",
    bibleVerse:
     ["Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead, and into an inheritance that can never perish, spoil or fade.", "1 Peter 1:3-4"],
    boxName: "Blackheath",
    boxNumber: "Box 1",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX1",
    totalImages: 20,
    bodyText: [
      "Well, the cat's out of the box now! I've learnt a few new tricks these past few months that I have done my best at hiding from you... I wonder how many of these you knew about 😅",
      "Anyho, this is our first trip down memory lane: Blackheath. The first place where this boy became googly eyed over a certain meringue girl. From book shops to burger making buds, this was a time that I well and truly began full crushing over you",
    ],
  };

  const clueProps: ClueProps = {
    clue: <Box1Clue />,
    boxNumber: "Box 2",
  }

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
      clueProps={clueProps}
    />
  );
};

export const Box2Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX2.gif",
    bibleVerse: ["“For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh.” This is a profound mystery—but I am talking about Christ and the church. However, each one of you also must love his wife as he loves himself, and the wife must respect her husband.", "Ephesians 5:31-33"],
    boxName: "Esky",
    boxNumber: "Box 2",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX2",
    totalImages: 15,
    bodyText: ["First time I asked you out"],
  };

  const clueProps: ClueProps = {
    clue: <Box2Clue />,
    boxNumber: "Box 3",
  }

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
      clueProps={clueProps}
    />
  );
};

export const Box3Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX3.gif",
    bibleVerse: ["With it he touched my mouth and said, \“See, this has touched your lips; your guilt is taken away and your sin atoned for.\” Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?”And I said, “Here am I. Send me!”", "Isaiah 6:7-8"],
    boxName: "Meadowbank",
    boxNumber: "Box 3",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX3",
    totalImages: 20,
    bodyText: ["First date"],
  };

  const clueProps: ClueProps = {
    clue: <Wordle />,
    boxNumber: "Box 4",
  }

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
      clueProps={clueProps}
    />
  );
};

export const Box4Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX4.gif",
    bibleVerse: ["No, in all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", "Romans 8: 37-39"],
    boxName: "Wharf",
    boxNumber: "Box 4",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX4",
    totalImages: 15,
    bodyText: ["First timeline"],
  };
  const clueProps: ClueProps = {
    clue: <Box4Clue />,
    boxNumber: "Box 5",
  }

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
      clueProps={clueProps}
    />
  );
};

export const Box5Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX5.gif",
    bibleVerse: ["A wife of noble character who can find? She is worth far more than rubies. Her children arise and call her blessed her husband also, and he praises her... “Many women do noble things,but you surpass them all. Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised. Honour her for all that her hands have done, and let her works bring her praise at the city gate.", "Proverbs 31:10, 29-31"],
    boxName: "Maxine",
    boxNumber: "Box 5",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX5",
    totalImages: 20,
    bodyText: ["First kiss/I love you"],
  };

  const clueProps: ClueProps = {
    clue: <Box5Clue />,
    boxNumber: "Box 6",
  }

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
      clueProps={clueProps}
    />
  );
};

export const Box6Page: React.FC<{}> = () => {
  const boxArtProps: BoxArtProps = {
    fileName: "BOX6.gif",
    bibleVerse: ["This is a verse from 1 PETER"],
    boxName: "Hill",
    boxNumber: "Box 6",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX6",
    totalImages: 1,
    bodyText: ["nice"],
  };
  const clueProps: ClueProps = {
    clue: <Box1Clue />,
    boxNumber: "Box 7?",
  }

  return (
    <BaseBoxPage
      boxArtProps={boxArtProps}
      photoCollageProps={photoCollageProps}
      clueProps={clueProps}
    />
  );
};
