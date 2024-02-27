import axios from "axios";

export const request = axios.create({
  baseURL: "http://3.94.52.180:8000/api",
  /* Put the domain of backend */
});
