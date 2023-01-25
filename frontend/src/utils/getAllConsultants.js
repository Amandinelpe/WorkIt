import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const requestApi = (finalUrl) => {
  return axios
    .get(apiUrl + finalUrl)
    .then((response) => response.data)
    .catch((error) => console.warn(error));
};

// eslint-disable-next-line import/prefer-default-export
export const GetAllConsultants = () => {
  return requestApi("consultant/all/");
};
