import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import theme from './theme/default.js'
import ContextWrapper from './context/ContextWrapper.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ContextWrapper>
  </React.StrictMode>
);
