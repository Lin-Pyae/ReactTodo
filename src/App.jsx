import React from 'react'
import Login from './components/Login'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import PrivateRoute from './PrivateRoute'

const App = () => {

  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home"  element={
               <PrivateRoute>
                 <Home />
                </PrivateRoute>
             } />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  )
}

export default App