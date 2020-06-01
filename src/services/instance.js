import axios from 'axios';

const baseURL = 'http://localhost:8000';

const instance = axios.create({ baseURL });
export const defaultHeaders = () => ({
  'Content-Type': 'application/json',
});

instance.interceptors.response.use(
  res => (res.data ? res.data : res),
  err => Promise.reject(err)
);

export default instance;
