import axios from "axios";

const api = axios.create({
  //   baseURL: "http://localhost:3333",
  baseURL: "https://dev-restaurante-api.vercel.app",
});

export { api };
