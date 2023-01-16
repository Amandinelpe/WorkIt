import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

/* const requestApi = (finalUrl) => {
  return axios.get(apiUrl + finalUrl).then((response) => response.data);
};
 */
// eslint-disable-next-line import/prefer-default-export
export const GetAllJobs = () => {
  return axios.get(apiUrl + "job/").then((response) => response.data);
};

export const GetAllJobsTitles = () => {
  return axios.get(apiUrl + "jobtitiles/").then((response) => response.data);
};
