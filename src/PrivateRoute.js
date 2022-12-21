import { useKeycloak } from "@react-keycloak/web";
import Login from "./components/Login";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 console.log(isLoggedIn)

 return isLoggedIn ? <Login/> : <Login/>;
};

export default PrivateRoute;