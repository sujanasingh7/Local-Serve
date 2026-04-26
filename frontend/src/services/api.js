import axios from "axios";

const API = axios.create({
  baseURL: "https://local-serve-1-0und.onrender.com"
});

export default API;