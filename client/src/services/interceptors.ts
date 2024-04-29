import axios from "axios";

const UnprotectedRoutes = ['/register', '/register/doctor']
export const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token') ?? '';
        if (config.url && token && !UnprotectedRoutes.includes(config.url)) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  };
  