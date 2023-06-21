import axios from "axios";

export const getPoints = (body) => {
  return axios.post(process.env.REACT_APP_BACKEND_URL + `points/getAll`, body);
};
export const insertPoints = (body) => {
  return axios.post(process.env.REACT_APP_BACKEND_URL + "points/insert", body);
};
