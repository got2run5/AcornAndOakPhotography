import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const controlsTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#005b9f"
    },
    secondary: {
      main: "#D3CEC6"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={controlsTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
