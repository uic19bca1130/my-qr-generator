import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const darkTheme=createTheme({
  palette: { 
    mode: 'dark',
  },                  
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
