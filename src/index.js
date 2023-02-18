import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1c8dc1',
          colorLink: '#606060',
          colorLinkHover: '#1c8dc1',
          colorLinkActive: '#0e5981',
        },
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConfigProvider>
  </HashRouter>
);

