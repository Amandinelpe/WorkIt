import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export
export const resetPassword = (token) => {
  return axios.post(apiUrl + "user/checkToken", { token });
};
