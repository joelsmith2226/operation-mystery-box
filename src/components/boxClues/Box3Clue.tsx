import React, { useState } from "react";
import { Grid, Paper, TextField, Typography, Snackbar } from "@mui/material";
import { Flip } from "react-awesome-reveal";

const Wordle: React.FC = () => {
  const targetWord = "WHARF";
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
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
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getFeedbackColor = (letter: string, index: number) => {
    if (currentIndex === index) {
      if (letter === targetWord[index]) {
        return "green";
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
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                width: "100%",
              }}
            >
              {targetWord.split("").map((letter, colIndex) => (
                <Flip key={colIndex} triggerOnce direction="vertical">
                  <Paper
                    elevation={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 48,
                      width: 48,
                      backgroundColor: getFeedbackColor(guesses[rowIndex]?.[colIndex] || "", rowIndex),
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {guesses[rowIndex]?.[colIndex] || ""}
                    </Typography>
                  </Paper>
                </Flip>
              ))}
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <TextField
            value={currentGuess}
            onChange={handleGuessChange}
            onKeyDown={handleEnterPress}
            autoFocus
            inputProps={{
              maxLength: 5,
              style: {
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
            }}
            sx={{
              marginTop: 2,
              width: "100%",
            }}
          />
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
