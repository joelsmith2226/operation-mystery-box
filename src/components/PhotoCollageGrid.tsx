import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

const PhotoCollage = styled(Grid)(({ opacity, showAllPhotos }: { opacity: number, showAllPhotos: boolean }) => ({
  flexGrow: 1,
  height: "50vh", // Set the height to 50% of the viewport height
  marginRight: "auto", // Auto margin on the left side
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  opacity: showAllPhotos ? 1 : opacity,
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

const CameraButton = styled(IconButton)`
  position: absolute;
  bottom: 10vh;
  right: 10vh;
  color: white;
  z-index: 3;
  opacity: 0.2;
`;

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
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleLongPress = (event: React.MouseEvent) => {
    setIsLongPress(!isLongPress);
  };

  const handleRelease = () => {
    setIsLongPress(false);
  };

   const handleCameraButtonClick = () => {
    setShowAllPhotos(!showAllPhotos);
  };


  return (
    <Box style={{ zIndex: 2 }}>
      <PhotoCollage
        container
        opacity={isLongPress ? 1 : 0.64}
        showAllPhotos={showAllPhotos}
        spacing={0}
        onDoubleClick={handleLongPress}
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
      <OverlayContainer opacity={isLongPress || showAllPhotos ? 0 : 1}>
        <OverlayText>
          {bodyText.map((val) => (
            <p>{val}</p>
          ))}
        </OverlayText>
      </OverlayContainer>
       <CameraButton onClick={handleCameraButtonClick}>
        <CameraAlt />
      </CameraButton>
    </Box>
  );
};
export default PhotoCollageGrid;
