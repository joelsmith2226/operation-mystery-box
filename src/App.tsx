import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
  Typography,
  Grid,
  IconButton,
  Box,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import PhotoCollage from './components/PhotoCollage.tsx';

// Import the custom font
import './fonts/Allan-Bold.ttf';

// Define the custom theme
const theme = createTheme({
  palette: {
    mode: 'dark', // Use dark mode
    primary: {
      main: '#9FBCFF', // Use light sand green as the primary color
    },
    background: {
      default: '#111111', // Use a darker background color for the page
      paper: '#222222', // Use a darker background color for the container
    },
    // You can also define other colors such as secondary, error, warning, etc.
  },
  typography: {
    fontFamily: 'Allan-Bold', // Use the custom font
  },
});

const App: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [showPhotoCollage, setShowPhotoCollage] = useState(false);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleAnswerSubmit = () => {
    // Check if answer is correct
    if (answer === 'YourAnswerHere') {
      setShowPhotoCollage(true);
    } else {
      // Show error message or perform other actions
      console.log('Incorrect answer. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: theme.palette.background.default, // Use default background color for the page
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.background.paper, // Use paper background color for the container
              }}
            >
              <Typography variant="h4" gutterBottom>
                Mystery Box #1
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Please enter the correct answer to unlock the photo collage.
              </Typography>
              <TextField
                label="Answer"
                variant="outlined"
                margin="normal"
                value={answer}
                onChange={handleAnswerChange}
              />
              <Button variant="contained" onClick={handleAnswerSubmit}>
                Submit
              </Button>
              {showPhotoCollage && <PhotoCollage />}
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
