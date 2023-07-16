import { Button, Typography, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import audioFile1 from "../../assets/BOX4/sounds/Bass.mp3";
import audioFile2 from "../../assets/BOX4/sounds/Dustin.mp3";
import audioFile3 from "../../assets/BOX4/sounds/Google.mp3";
import audioFile4 from "../../assets/BOX4/sounds/Kettle.mp3";
import audioFile5 from "../../assets/BOX4/sounds/Kibble.mp3";
import audioFile6 from "../../assets/BOX4/sounds/Microwave.mp3";
import audioFile7 from "../../assets/BOX4/sounds/Squeek.mp3";


const EmojiButton = styled(Button)({
  opacity: 0.5,
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
});

interface AudioButtonProps {
  emoji: string;
  audioFile: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ emoji, audioFile }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const handleEmojiClick = () => {
  if (audioRef.current) {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to start when paused
    }
  }
};

  return (
    <>
      <EmojiButton onClick={handleEmojiClick} disabled={isPlaying}>
        <Typography variant="h1">{emoji}</Typography>
      </EmojiButton>
      <audio
        ref={audioRef}
        src={(audioFile)}
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
        onEnded={handleAudioEnd}
        controls
      />
    </>
  );
};

const Box5Clue: React.FC = () => {
  return (
    <div>
      <AudioButton emoji="🎵" audioFile={audioFile1} />
      <AudioButton emoji="🎶" audioFile={audioFile2} />
      <AudioButton emoji="🔊" audioFile={audioFile3} />
      <AudioButton emoji="🎧" audioFile={audioFile4} />
      <AudioButton emoji="🎤" audioFile={audioFile5} />
      <AudioButton emoji="🎸" audioFile={audioFile6} />
      <AudioButton emoji="🎸" audioFile={audioFile7} />
    </div>
  );
};

export default Box5Clue;
