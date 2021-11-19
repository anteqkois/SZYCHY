import { authorization } from './routes';
import * as api from './api';

export const login = (body) => {
  return api.post(`${authorization()}/login`, body);
};

export const logout = () => {
  return api.get(`${authorization()}/logout`);
};

export const signup = (body) => {
  return api.post(`${authorization()}/signup`, body);
};
