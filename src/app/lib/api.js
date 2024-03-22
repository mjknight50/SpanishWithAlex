import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getMateriales = async () => {
  const res = await api.get("/materials");
  return res.data;
};

export const getReviews = async () => {
  const res = await api.get("/reviews");
  return res.data;  
};
