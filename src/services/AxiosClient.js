import axios from "axios";

const AxiosClient = axios.create();

console.log("ENVIRONMENT VARIABLES:", process.env);

AxiosClient.defaults.baseURL =
  "http://localhost:8000" ||
  "https://server-slv.onrender.com" ||
  process.env.REACT_APP_BASE_URL;

export default AxiosClient;
