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
import { Typography } from "@mui/material";

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
      "Anyho, today we are taking a trip down memory lane at our relationship! First stop: Blackheath. The first place where this boy became googly eyed over a certain meringue girl. From book shops to burger making buds, this was a time that I well and truly became full blown Jas-obsessed. (Also 1 Peter is what we read there together!).", "Here is an excerpt from my Blackheath notes before we move on: \"ended up driving to a lookout and it was freezing. We shared a few moments here. At the summit we were making banter about a hill or mound or mountain. But I just remember thinking, oh boy I'm nervous in front of you and don't know what to say. Her eyes kinda sparkled in the moonlight (oop cheesy).\""
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
    bodyText: ["A reflection I had re-reading over Ephesians 5 this morning was how we are to live out of reverance for Christ - both in marriage but in all of life. This is a prayer I have for us that we would continue to live for Him, being lights in the Lord; children of light!", "Returning to the boxes, I tried to capture my nervous energy within this carpark in the models. How glad I am now that you lingered outside your car! And that I eventually found the courage to stumble out the words \'would you like to grab coffee sometime?\'"],
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
    bodyText: ["\'Oh my gosh I love Isaiah 6!\' I chose this verse as a reminder that we need to be open to being sent - wherever that is - to share this life-changing news!", "Ah the first time you drank coffee politely because you didn't want to be rude. I would love to go back in time and watch my nervous energy as I panicked over how amazing you were and that you were there with me!", "This box also represents our son (spicy), Dustinho, who we also have spent a large chunk of time in Meadowbank with. Seeing you with him (although we don't compare!), makes me think about the future and other little ones that might come along, more on that later 😉"],
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
    bodyText: ["For the record, I wanted to put all of Romans 8 here, so good!!", "Now, this wharf might not be as memorable to you, but it was for me! This was our first timeline chat, where we were a few months into dating and we cranked it up a notch. This was where we discussed all things future with marriage and kids, and I remember being taken aback with how soon children might come into the picture! But pretty soon after some thought and prayer and introspection, I was onboard 🛳", "The future became real in that moment, and I realised you were the one I wanted to spend the rest of my life with"],
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
    bodyText: ["You are a Proverbs 31 woman! You fear the Lord and seek to serve Him in all that you do and are such an encouragement to me everyday. I am so blessed to have such a godly woman in my life and I thank God for you constantly ❤️", "Do not fear, I promised I wouldn't propose in Maxine haha. But we did share some signifant moments in here: This was our first kiss. This was where you told me you loved me. This is where we grew deeper in relationship in reading together, praying together, a small picture of the life to come in the next step.", "I can't wait to have a home with you, to be hospitable with you, to be intimate with you, to be the last thing you see at night and the first you see in the morning."],
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
    bibleVerse: ["Brothers and sisters, I do not consider myself yet to have taken hold of it. But one thing I do: Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus", "Phillipians 3:13-14"],
    boxName: "Hill",
    boxNumber: "Box 6",
  };

  const photoCollageProps: PhotoCollageProps = {
    directoryPath: "BOX6",
    totalImages: 1,
    bodyText: ["nice"],
  };
  const clueProps: ClueProps = {
    clue: <Typography>Can't wait to marry you, my JT</Typography>,
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
