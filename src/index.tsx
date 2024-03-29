import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthUserContextProvider from 'components/UserContextProvider';
import './index.css';
import './variables.css';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthUserContextProvider>
        <App />
      </AuthUserContextProvider>
    </BrowserRouter>
 </React.StrictMode>
);
