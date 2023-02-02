import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export

export const LaunchAlerts = (user_id, offer_id) => {
  return axios.post(apiUrl + "alert", { user_id, offer_id });
};
