import axios from "axios";

const api = axios.create({
  baseURL: "http://10.77.241.88:3000",
});

export default api;
