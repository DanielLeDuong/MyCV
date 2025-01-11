import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

const customTheme = createTheme({
  cssVariables: {
   colorSchemeSelector: 'class', // Use 'class' or 'data'
  },
  
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none'
        },
      },
    },
  },
  colorSchemes: {
    // light: {
      
    // },
    // dark: {
      
    // },
  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
