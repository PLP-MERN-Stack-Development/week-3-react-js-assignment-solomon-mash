import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client'
import './index.css';
import ThemeProvider from './context/ThemeProvider';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <ThemeProvider>
      <App />


  </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );
