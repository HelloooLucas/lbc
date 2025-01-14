import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3005",
});

api.defaults.headers.common["Content-Type"] = "application/json";

export default api;
