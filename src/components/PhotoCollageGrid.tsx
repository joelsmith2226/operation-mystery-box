import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

const PhotoCollage = styled(Grid)(({ opacity }: { opacity: number }) => ({
  flexGrow: 1,
  height: "50vh", // Set the height to 50% of the viewport height
  marginRight: "auto", // Auto margin on the left side
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  opacity: opacity,
  zIndex: 2,
  transition: "opacity 0.3s ease-in-out",
}));

const PhotoItem = styled(Grid)({
  position: "relative",
  width: "calc(25% - 20px)",
  margin: "0px",
  padding: "0px",
  transform: "rotate(-2deg)",
  transition: "transform 0.3s ease-in-out",
  zIndex: 2,
  "&:hover": {
    transform: "rotate(-4deg)",
  },
});

const getRandomTransformation = () => {
  const minTranslateX = -2;
  const maxTranslateX = 3;
  const minTranslateY = -2;
  const maxTranslateY = 3;
  const minRotate = -10;
  const maxRotate = 10;

  const translateX =
    (Math.random() * (maxTranslateX - minTranslateX) + minTranslateX) *
    getRandomSign();
  const translateY =
    (Math.random() * (maxTranslateY - minTranslateY) + minTranslateY) *
    getRandomSign();
  const rotate =
    (Math.random() * (maxRotate - minRotate) + minRotate) * getRandomSign();

  return `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
};

const getRandomSign = () => {
  return Math.random() < 0.5 ? -1 : 1;
};

const OverlayContainer = styled(Box)(({ opacity }: { opacity: number }) => ({
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  width: "75%",
  background: "rgba(0, 0, 0, 0.8)",
  border: "1px solid white",
  borderRadius: "8px",
  color: "#ffffff",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  opacity: opacity,
}));

const OverlayText = styled(Typography)({
  zIndex: 9,
  color: "white",
  fontSize: "4vw",
  fontWeight: "bold",
});

export interface PhotoCollageProps {
  directoryPath: string; // Path to the directory containing the images
  totalImages: number; // Total number of images
  bodyText: string[];
}

const PhotoCollageGrid: React.FC<PhotoCollageProps> = ({
  directoryPath,
  totalImages,
  bodyText,
}) => {
  const imageNames = Array.from({ length: totalImages }, (_, index) =>
    require(`../assets/${directoryPath}/${index + 1}.jpg`)
  );

  const [isLongPress, setIsLongPress] = useState(false);

  const handleLongPress = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsLongPress(!isLongPress);
  };

  const handleRelease = () => {
    setIsLongPress(false);
  };

  return (
    <Box style={{ zIndex: 2 }}>
      <PhotoCollage
        container
        opacity={isLongPress ? 1 : 0.64}
        spacing={0}
        onContextMenu={handleLongPress}
        onMouseUp={handleRelease}
        onMouseLeave={handleRelease}
      >
        {imageNames.map((imageName, index) => {
          const randomTransformation = getRandomTransformation();
          const startingPos = `rotate(${Math.random() * 12 - 2}deg)`;

          const floatAnimation = `float-${index + 1} 10s infinite`;

          const floatKeyframes = `
            @keyframes float-${index + 1} {
              0% {
                transform: ${startingPos};
              }
              50% {
                transform: ${randomTransformation};
              }
              100% {
                transform: ${startingPos};
              }
            }
          `;

          return (
            <PhotoItem key={index} item>
              <img
                src={imageName}
                alt={`Photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.5s ease-in-out",
                  border: "2px solid #ffffff",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  transform: startingPos,
                  zIndex: 2,
                  animation: floatAnimation,
                  animationTimingFunction: "linear",
                  animationDirection: "alternate",
                  animationName: `float-${index + 1}`,
                }}
              />
              <style>{floatKeyframes}</style>
            </PhotoItem>
          );
        })}
      </PhotoCollage>
      <OverlayContainer opacity={isLongPress ? 0 : 1}>
        <OverlayText>
          {bodyText.map((val) => (
            <p>{val}</p>
          ))}
        </OverlayText>
      </OverlayContainer>
    </Box>
  );
};
export default PhotoCollageGrid;
