import axios from "axios";

const getToken = () => {
  return localStorage.getItem("token");
};
const baseURL=process.env.REACT_APP_BASE_URL
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const message =
        error?.response?.data?.message || error?.message || "Something went wrong";
      return Promise.reject(new Error(message)); // ✅ Convert to Error object
    }
  );
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
