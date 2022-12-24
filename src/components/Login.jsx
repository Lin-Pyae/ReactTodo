import './Login.css'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {keycloak} = useKeycloak();

  if (keycloak.authenticated) navigate("/home");
  return (
        <div>
          {!keycloak.authenticated && (
             <button
               type="button"
               className="text-blue-800"
               onClick={() => keycloak.login()}
             >
               Login
             </button>
           )}


        </div>
  )
}

export default Login