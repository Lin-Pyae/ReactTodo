import {useState} from 'react'
import Login from './components/Login'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import cloak from "./Keycloak"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Admin from './components/Admin';
import { useKeycloak } from '@react-keycloak/web';

const App = () => {
const [role, setRole] = useState()



// const Role  = (r)=>{
// setRole(r)
// }
console.log(role === "admin");
  return (
    <div>
      <ReactKeycloakProvider authClient={cloak}>
        <BrowserRouter>
          <HandleRole/>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  )
}

const HandleRole = () =>{
  const {keycloak} = useKeycloak()
  return(
<Routes>
            <Route exact path="/" element={<Login />} />

            <Route path="/home"  element={<PrivateRoute> <Home /> </PrivateRoute>} />
            <Route path="/admin" element={keycloak.hasRealmRole("admin")? <PrivateRoute> <Admin/> </PrivateRoute>: <Login/>}/>
            {/* <Route path="/admin" element={ <PrivateRoute> <Admin/> </PrivateRoute>}/> */}

          </Routes>
  )

}



export default App