import axios from "axios";

const instance = axios.create({
  baseURL: process.env.HOST,
});

export default instance;
