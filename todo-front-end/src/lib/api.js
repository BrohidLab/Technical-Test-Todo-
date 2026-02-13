import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-user-id": "123",
  },
});
