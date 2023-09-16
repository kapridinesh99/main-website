import axios from "axios";

const token = localStorage.getItem("rv_token") || "";

export const resourceService = axios.create({
  baseURL: "https://u6vywhlh59.execute-api.ap-south-1.amazonaws.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const authService = axios.create({
  baseURL: "https://u6vywhlh59.execute-api.ap-south-1.amazonaws.com/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
