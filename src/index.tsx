import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from './styles/Reset';
import { GlobalStyle } from './styles/Global';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Reset />
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
