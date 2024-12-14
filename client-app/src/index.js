import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind-output.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './AuthContext';
 
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b80007',
    },
    secondary: {
      main: '#c9a512',
    },
  },
});

export default theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AuthProvider>
        <App />
      </AuthProvider>
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
//   <AuthProvider>
//     <App />
//   </AuthProvider>,
//   document.getElementById('root')
// );