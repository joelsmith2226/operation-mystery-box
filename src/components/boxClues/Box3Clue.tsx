import React, { useState } from "react";
import { Grid, Paper, TextField, Typography, Snackbar, Box } from "@mui/material";
import { Flip } from "react-awesome-reveal";
import { styled } from "@mui/system";

const StyledPaper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
`;

const StyledLetterPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  margin: 2px;
`;

const StyledTypography = styled(Typography)`
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 4vw;
  font-family: 'Signika Negative', sans-serif;
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  margin-top: 2px;
  width: 100%;
  font-size: 4vw;
  font-family: 'Signika Negative', sans-serif;
  text-align: center;

  & input {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const Label = styled(Typography)`
  font-size: 4vw;
  font-family: 'Signika Negative', sans-serif;
  text-align: center;
`;


const  Wordle: React.FC = () => {
  const targetWord = "WHARF";
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastGuessedIndex, setLastGuessedIndex] = useState(-1);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = event.target.value.toUpperCase().slice(0, 5);
    setCurrentGuess(newGuess);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (currentGuess.length !== 5) {
        setErrorSnackbarOpen(true);
        return;
      }
      const newGuesses = [...guesses];
      newGuesses[currentIndex] = currentGuess;
      setGuesses(newGuesses);
      setCurrentGuess("");
      setLastGuessedIndex(currentIndex);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getFeedbackColor = (letter: string, index: number) => {
    if (letter !== "") {
      if (letter === targetWord[index]) {
        return "lime";
      } else if (targetWord.includes(letter)) {
        return "yellow";
      }
    }
    return "white";
  };

  const handleSnackbarClose = () => {
    setErrorSnackbarOpen(false);
  };

  return (
    <>
      <Grid container spacing={1}>
        {Array(6).fill(null).map((_, rowIndex) => (
          <Grid item xs={12} key={rowIndex}>
            <StyledPaper>
              {targetWord.split("").map((letter, colIndex) => (
                <StyledLetterPaper
                  key={colIndex}
                  elevation={3}
                  sx={{
                    backgroundColor:
                      getFeedbackColor(guesses[rowIndex]?.[colIndex] || "", colIndex),
                  }}
                >
                  {rowIndex === lastGuessedIndex ? (
                    <Flip triggerOnce direction="vertical">
                      <StyledTypography variant="h6">
                        {guesses[rowIndex]?.[colIndex] || ""}
                      </StyledTypography>
                    </Flip>
                  ) : (
                    <StyledTypography variant="h6">
                      {guesses[rowIndex]?.[colIndex] || ""}
                    </StyledTypography>
                  )}
                </StyledLetterPaper>
              ))}
            </StyledPaper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <StyledTextField
            value={currentGuess}
            onChange={handleGuessChange}
            onKeyDown={handleEnterPress}
            autoFocus
            inputProps={{
              maxLength: 5,
            }}
          />
          <Label>
            Wordjoele (My best at a Wordle clone lol)
          </Label>
        </Grid>
      </Grid>
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Please enter a 5-letter word"
      />
    </>
  );
};

export default Wordle;