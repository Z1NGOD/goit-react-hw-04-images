import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ImageProvider } from './Context/StateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ImageProvider>
);
