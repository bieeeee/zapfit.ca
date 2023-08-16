import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://zapfit-028c4922d191.herokuapp.com/api/"
})
