import axios from "axios";
import { Constants } from "../config/constant";

export const doLoginQuery = data => {
  return axios
    .post(`${Constants.apiBaseUrl}/login`, data)
    .then(response => response)
    .catch(err => err.response);
};
