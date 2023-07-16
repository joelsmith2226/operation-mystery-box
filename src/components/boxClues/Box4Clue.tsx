import { Box, Button, Typography, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import audioFile6 from "../../assets/BOX4/sounds/Bass.mp3";
import audioFile2 from "../../assets/BOX4/sounds/Dustin.mp3";
import audioFile5 from "../../assets/BOX4/sounds/Google.mp3";
import audioFile4 from "../../assets/BOX4/sounds/Kettle.mp3";
import audioFile1 from "../../assets/BOX4/sounds/Kibble.mp3";
import audioFile3 from "../../assets/BOX4/sounds/Squeek.mp3";

const EmojiButton = styled(Button)(({ isPlaying }: { isPlaying: boolean }) => ({
  opacity: isPlaying ? 1 : 0.5,
  width: "20vh",
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
}));

const StyledBox = styled(Box)(`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 16px;
  justify-items: center;
`);

const Label = styled(Typography)`
  font-size: 4vw;
  font-family: 'Signika Negative', sans-serif;
  text-align: center;
`;
interface AudioButtonProps {
  emoji: string;
  audioFile: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ emoji, audioFile }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
    setRenderKey((prevKey) => prevKey + 1); // Update renderKey to force re-render
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setRenderKey((prevKey) => prevKey + 1); // Update renderKey to force re-render
  };

  const handleEmojiClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio to start when paused
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <EmojiButton key={renderKey} onClick={handleEmojiClick} isPlaying={isPlaying}>
        <Typography variant="h1">{emoji}</Typography>
      </EmojiButton>
      <audio
        ref={audioRef}
        src={audioFile}
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
        onEnded={handleAudioEnd}
      />
    </>
  );
};

const Box4Clue: React.FC = () => {
  return (
    <>
      <StyledBox>
        <AudioButton emoji="🎵" audioFile={audioFile1} />
        <AudioButton emoji="🔊" audioFile={audioFile3} />
        <AudioButton emoji="🎧" audioFile={audioFile4} />
        <AudioButton emoji="🎤" audioFile={audioFile5} />
        <AudioButton emoji="🎸" audioFile={audioFile6} />
        <AudioButton emoji="🎶" audioFile={audioFile2} />
      </StyledBox>
      <Label>Press a sound to find the next box</Label>
    </>
  );
  
};

export default Box4Clue;
