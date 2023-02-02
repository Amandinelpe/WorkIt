import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export

export const GetUserAlerts = (job_id, city) => {
  return axios.get(apiUrl + "userAlert/?" + `job_id=${job_id}&city=${city}`);
};
