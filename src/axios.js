import axios from "axios";
import _ from "lodash";

const instance = axios.create({

  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000,
});

//Interceptor để thêm token vào header của mọi request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); //Lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; //Gắn token vào header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default instance;
