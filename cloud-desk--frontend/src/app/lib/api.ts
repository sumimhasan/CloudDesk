// src/lib/api.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000", // NestJS backend
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔒 Add Authorization header automatically (if token exists)
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ❌ Handle errors globally
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — maybe redirect to login?");
    }
    return Promise.reject(error);
  }
);

export default api;
