// src/components/PhotoCollage.tsx

import React from "react";

interface PhotoCollageProps {
  memory: string;
  onNextButtonClick: () => void;
}

const PhotoCollage: React.FC<PhotoCollageProps> = ({ memory, onNextButtonClick }) => {
  return (
    <div>
      <h1>Memory Revealed</h1>
      <p>{memory}</p>
      <p>
        {/* Render the photo collage here */}
        {/* Add the Next button in the bottom right corner */}
        <button onClick={onNextButtonClick}>Next</button>
      </p>
    </div>
  );
};

export default PhotoCollage;
