import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const Axios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use((config) => {
  return config;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown): Promise<T> {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data?: unknown): Promise<T> {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string): Promise<T> {
    const response = await Axios.delete<T>(url);
    return response.data;
  }

  static async patch<T>(url: string, data?: unknown): Promise<T> {
    const response = await Axios.patch<T>(url, data);
    return response.data;
  }
}

