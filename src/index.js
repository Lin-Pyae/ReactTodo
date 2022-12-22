import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import keycloak from './Keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

// const tokenLogger = ({token}) =>{
//     console.log(keycloak);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


