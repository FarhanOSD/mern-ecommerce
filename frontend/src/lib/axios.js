import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mensshop.onrender.com/api', // Always use the deployed URL
  withCredentials: true, // Send cookies to the server
});

export default axiosInstance;
