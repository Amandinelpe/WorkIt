import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const postApi = (finalUrl, credentials) => {
  return axios
    .post(apiUrl + finalUrl, credentials)
    .then((response) => response.data);
};

// eslint-disable-next-line import/prefer-default-export
export const loginConsultant = (credentials) => {
  return postApi("login/", credentials);
};
