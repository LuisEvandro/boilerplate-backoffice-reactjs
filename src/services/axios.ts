import axios from 'axios';

export function getAPIClient() {
  const token = sessionStorage.getItem('boilerplate.token');
  const baseUrl = 'http://localhost:3030/api/';

  const api = axios.create({
    baseURL: baseUrl,
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers.common.Authorization = token;
  }

  return api;
}
