import React, { useState } from "react";
import { AES, enc } from "crypto-ts";
import { Box, Button, styled, Snackbar, TextField, Typography } from "@mui/material";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  color: "white",
});

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    background-color: white;
    color: black;
  }
`;

const Base64 = require("crypto-js/enc-base64");
const secretKey = "thisIsaSecretKey"; // Replace with your own secret key
const encryptedPassword = "U2FsdGVkX1+rBs/auGcq4Prbgc7jlMBuSlbCacwC1QY"; // Replace with the correct encrypted password
const iv = enc.Utf8.parse("1234567890123456");

interface PasswordProps {
  onPasswordCorrect: () => void;
}

const Password: React.FC<PasswordProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const encryptPassword = (password: string) => {
    return AES.encrypt(password, secretKey).toString();
  };

  const handleSubmitPassword = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredPassword = encryptPassword(password);
    const encryptedSecretKey = AES.encrypt(secretKey, secretKey, { iv }).toString();

    // Encrypt the entered password using the encrypted secret key with the fixed IV
    const encryptedPassword = AES.encrypt(enteredPassword, encryptedSecretKey, { iv }).toString();

    console.log("Encrypted Password:", encryptedPassword);
    console.log("Entered Password:", enteredPassword);

    // if (encryptedPassword == "U2FsdGVkX19Fr3E9X+SVw9DZZ196D0eVrHCidi8/vrp3pkoc+Lms3X2EmPiV3mtHfkiUkczmcy+VrnrGvpC+RQ==") {
    if (password == "Fix You") {
      // Password is correct, proceed to the scrollable container component
      // Implement your logic here...
      onPasswordCorrect();
    } else {
      // Password is incorrect, display error message
      setError(true);
    }

    setPassword("");
  };

  const handleCloseSnackbar = () => {
    setError(false);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Best John Mayer song?
      </Typography>
      <form onSubmit={handleSubmitPassword}>
        <StyledBox>
            <StyledTextField
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Use Capitalised Words"
            variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
            Submit
            </Button>
        </StyledBox>
      </form>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Incorrect answer"
      />
    </Container>
  );
};

export default Password;
