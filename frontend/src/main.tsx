import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
//sets up exchange of cookies between the client and the server
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    fontFamily: 'serif',
    allVariants: { color: 'white' },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </AuthProvider>
);
