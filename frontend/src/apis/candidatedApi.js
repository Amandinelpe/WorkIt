import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export

export const GetAllCandidated = () => {
  return axios.get(apiUrl + "candidated");
};

export const GetCandidatedByUserAndOffer = (user_id, offer_id) => {
  return axios.get(
    apiUrl + "candidated/user/" + `?user_id=${user_id}&offer_id=${offer_id}`
  );
};
export const PostCandidated = (payload) => {
  return axios.post(apiUrl + "candidated", payload);
};
export const DeleteCandidated = (id) => {
  return axios.delete(apiUrl + "candidated/" + id);
};
