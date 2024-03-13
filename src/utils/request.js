import axios from "axios";

export const request = axios.create({
  baseURL: "https://localhost:8000/api",
  /* Put the domain of backend */
});
