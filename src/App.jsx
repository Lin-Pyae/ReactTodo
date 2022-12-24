import React from 'react'
import Login from './components/Login'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Admin from './components/Admin';

const App = () => {
  

//   const role = (x) => {
// <Route path="/admin" render={(routeProps) => {
//           if(x === 'admin'){
//             return <PrivateRoute><Admin/></PrivateRoute>
//           }
//           else{
//             return null;
//           }
// }}/>
//   }

const role = (x) =>{
  return x
}
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />

            {/* <Route path="/home"  element={<PrivateRoute> <Home userRole={role}/> </PrivateRoute>} />
            <Route path="/admin" element={ <PrivateRoute><Admin /></PrivateRoute> }/> */}

<Route path="/home"  element={<PrivateRoute> <Home userRole={role}/> </PrivateRoute>} />
<Route path="/admin" element={ <PrivateRoute><Admin /></PrivateRoute> }/>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  )
}

export default App