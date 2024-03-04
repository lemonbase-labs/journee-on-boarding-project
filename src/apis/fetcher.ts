import axios, { HttpStatusCode } from 'axios';
import { PATHS } from 'router/paths';
import { API_PATH, ERROR_CODE } from './constants';
import { getAccessToken, removeAccessToken, storeAccessToken } from './data';

export const fetcher = axios.create({
  baseURL: 'http://localhost:5173',
  headers: {
    'Content-Type': 'application/json',
  },
});

fetcher.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

fetcher.interceptors.response.use(
  response => response,
  async error => {
    const isForbiddenRequest = error.response.status === HttpStatusCode.Forbidden;

    if (isForbiddenRequest) {
      window.location.replace(PATHS.LOGIN);
      return Promise.reject(error);
    }

    const isExpiredAccessTokenRequest =
      error.response.status === HttpStatusCode.Unauthorized &&
      error.response.data.error.code === ERROR_CODE.EXPIRED_ACCESS_TOKEN;

    if (isExpiredAccessTokenRequest) {
      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const { data } = await fetcher.post(API_PATH.AUTH.REFRESH, { refreshToken });

        if (data) {
          storeAccessToken(data.accessToken);

          return fetcher(error.config);
        }
      } catch {
        removeAccessToken();
        localStorage.removeItem('refreshToken');

        window.location.replace(PATHS.LOGIN);
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
