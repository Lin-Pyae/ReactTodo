import {useState} from 'react'
import './Login.css'
import { useKeycloak } from '@react-keycloak/web'

const Login = () => {
  const {keycloak, initialized} = useKeycloak();
  return (
        <>
        <button type='button' onClick={() => keycloak.login()}>Login</button>
        <button type='button' onClick={() => keycloak.logout()}>Logout</button>
        </>
  )
}

export default Login