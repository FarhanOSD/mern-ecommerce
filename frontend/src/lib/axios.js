const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5000/api'
      : 'https://mensshop.onrender.com/api',
  withCredentials: true,
});
