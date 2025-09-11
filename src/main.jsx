// Entry point for the app
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexPage from './IndexPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
);
