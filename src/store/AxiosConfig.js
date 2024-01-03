// axiosConfig.js

import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'http://localhost:9000/api',
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const userToken = localStorage.getItem('accessToken');
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await api.post('/auth/refresh-token');
        const { access_token, refresh_token } = response.data;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        toast.error('Failed to refresh token');
        // Handle refresh error, e.g., redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
