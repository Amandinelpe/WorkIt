import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export

export const GetAllFavorites = () => {
  return axios.get(apiUrl + "favorite");
};

export const GetFavoriteByUserAndOffer = (user_id, offer_id) => {
  return axios.get(
    apiUrl + "favorite/user/" + `?user_id=${user_id}&offer_id=${offer_id}`
  );
};
