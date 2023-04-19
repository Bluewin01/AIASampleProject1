import axios from "axios";

const token = localStorage.getItem("token");
const baseApi = axios.create({
  baseURL: "http://localhost:5000/api/v1/user/",
  headers: {
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    "Content-Type": "Application/json",
  },
});

export default baseApi;
