import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

const PhotoCollage = styled(Grid)({
  flexGrow: 1,
  height: "50vh", // Set the height to 50% of the viewport height
  marginRight: "auto", // Auto margin on the left side
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const PhotoItem = styled(Grid)({
  position: "relative", // Set position to enable overlapping
  width: "calc(25% - 20px)", // Adjust the width as needed
  margin: "0px", // Add margin to create spacing between items
  padding: "0px",
  transform: "rotate(-2deg)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "rotate(-4deg)",
  },
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "opacity 0.5s ease-in-out",
  border: "2px solid #ffffff",
  borderRadius: "8px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  transform: "rotate(-2deg)",
  "&:hover": {
    transform: "rotate(-4deg)",
  },
});

const OverlayContainer = styled(Box)({
  position: "relative",
  left: "50%",
  bottom: "80%",
  transform: "translate(-50%, -50%)",
  padding: "16px",
  background: "rgba(0, 0, 0, 0.8)",
  borderRadius: "8px",
  color: "#ffffff",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const OverlayText = styled(Typography)({
  "@media (min-width: 600px)": {
    fontSize: "3.5vw",
  },

  "@media (min-width: 960px)": {
    fontSize: "2vw",
  },
  fontWeight: "bold",
});

interface PhotoCollageProps {
  directoryPath: string; // Path to the directory containing the images
  totalImages: number; // Total number of images
  bodyText: string;
}

const PhotoCollageGrid: React.FC<PhotoCollageProps> = ({
  directoryPath,
  totalImages,
  bodyText,
}) => {
  const imageNames = Array.from({ length: totalImages }, (_, index) =>
    require(`../assets/${directoryPath}/${index + 1}.jpg`)
  );

  return (
    <Box>
      <PhotoCollage container spacing={0}>
        {imageNames.map((imageName, index) => (
          <PhotoItem key={index} item>
            <Image
              src={imageName}
              alt={`Photo ${index + 1}`}
              style={{ transform: `rotate(${Math.random() * 12 - 2}deg)` }}
            />
          </PhotoItem>
        ))}
      </PhotoCollage>
      <OverlayContainer>
        <OverlayText>{bodyText}</OverlayText>
      </OverlayContainer>
    </Box>
  );
};

export default PhotoCollageGrid;
