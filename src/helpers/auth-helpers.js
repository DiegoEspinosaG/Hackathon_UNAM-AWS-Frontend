import Axios from 'axios';

const tokenStorage = 'token';

//Los siguientes métodos son para almacenar, obtener y
//eliminar el token usando local storage
export function setToken(token) {
  localStorage.setItem(tokenStorage, token);
}

export function getToken() {
  return localStorage.getItem(tokenStorage);
}

export function deleteToken() {
  localStorage.removeItem(tokenStorage);
}

//Si existe un token valido, agrega al encabezado el mismo token
//permitiendo la identificación del usuario logeado
export function initAxiosInterceptors() {
  Axios.interceptors.request.use(function (config) {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  Axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        deleteToken();
        window.location = '/login';
      } else {
        return Promise.reject(error);
      }
    }
  );
}