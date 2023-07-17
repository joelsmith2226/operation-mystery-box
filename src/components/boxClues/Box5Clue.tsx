import { Box, Button, Typography, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import audioFile1 from "../../assets/BOX5/sounds/castleOnHillEdit.mp3";
import audioFile2 from "../../assets/BOX5/sounds/violetHillEdit.mp3";
import audioFile3 from "../../assets/BOX5/sounds/kateBush.mp3";
import audioFile4 from "../../assets/BOX5/sounds/moulinRougeEdit.mp3";
import img1 from "../../assets/BOX5/sounds/castleOnHill.png";
import img2 from "../../assets/BOX5/sounds/violetHill.png";
import img3 from "../../assets/BOX5/sounds/kateBush.jpeg";
import img4 from "../../assets/BOX5/sounds/moulinRouge.jpeg";

const ImageButton = styled(Button)(({ isPlaying }: { isPlaying: boolean }) => ({
  opacity: isPlaying ? 1 : 0.5,
  width: "25vw",
  height: "25vw",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
}));

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const StyledBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 16px;
  justify-items: center;
`;

const Label = styled(Typography)`
  font-size: 4vw;
  font-family: "Signika Negative", sans-serif;
  text-align: center;
`;

interface AudioButtonProps {
  img: string;
  audioFile: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ img, audioFile }) => {
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

  const handleImageClick = () => {
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
      <ImageButton key={renderKey} onClick={handleImageClick} isPlaying={isPlaying}>
        <StyledImage src={img} alt="Audio Image" />
      </ImageButton>
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

const Box5Clue: React.FC = () => {
  return (
    <div>
      <StyledBox>
        <AudioButton audioFile={audioFile3} img={img3} />
        <AudioButton audioFile={audioFile4} img={img4} />
        <AudioButton audioFile={audioFile2} img={img2} />
        <AudioButton audioFile={audioFile1} img={img1} />
      </StyledBox>
      <Label>What do all these songs have in common?</Label>
    </div>
  );
};

export default Box5Clue;
