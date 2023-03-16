import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
      <App />
      <App />
      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
