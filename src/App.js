import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes"
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import {
  setToken,
  deleteToken,
  getToken,
  initAxiosInterceptors
} from '../src/helpers/auth-helpers';
import Axios from 'axios';
import { ROOT_URL } from './constants/defaultValues';

/*Intercepta todas las llamadas y coloca un encabezado 
con el token*/
initAxiosInterceptors();

export default function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  //const [error, setError] = useState(null);

  //Verifica si existe un usuario autenticado
  useEffect(() => {
    async function loadUser() {
      if (!getToken()) {
        setLoadingUser(false);
        return;
      }

      try {
        const { data: user } = await Axios.get(`${ROOT_URL}/auth/whoami`)
        setUser(user);
        setLoadingUser(false);
      } catch (error) {
        console.log(error)
      }
    }

    loadUser();
  }, []);

  //Recibe email y password de la vista login y manda un request
  //al recurso
  async function login(Email, Contrasena) {
    const { data } = await Axios.post(`${ROOT_URL}/auth/login`, {
      Email,
      Contrasena
    });
    setUser(data.user);
    setToken(data.token);
  }

  function logout() {
    setUser(null);
    deleteToken();
  }

  /*Si se está cargando un usuario, se muestra el 
  componente loading*/
  if (loadingUser) {
    return (
      <></>
    )
  }

  return(
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    {user ?
    (
      <div>
        {privateRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component 
                    {...props}
                    logout={logout}
                    user={user}
                    />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    ) : 
    (
      <div>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} login={login}/>
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    )
    }
  </Router>
  )
}
