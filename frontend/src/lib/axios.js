import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mensshop.onrender.com/api',
  withCredentials: true, // Send cookies with requests
});

export default axiosInstance; // Make sure this is "export default"
