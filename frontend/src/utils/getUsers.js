// eslint-disable-next-line import/prefer-default-export
import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const requestApi = (finalUrl) => {
  return axios.get(apiUrl + finalUrl).then((response) => response.data);
};

// eslint-disable-next-line import/prefer-default-export
export const GetUsers = () => {
  return requestApi("user");
};

// eslint-disable-next-line import/prefer-default-export
export const GetUser = (id) => {
  return requestApi(`user/${id}`);
};
