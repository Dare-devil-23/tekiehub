import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Scrollbars className='w-full min-h-screen'>
        <App />
      </Scrollbars>
    </BrowserRouter>
  </React.StrictMode>
);

