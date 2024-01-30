import axios from "axios";

export const request = axios.create({
  baseURL: "http://3.21.207.137:8000/api",
  /* Put the domain of backend */
});
