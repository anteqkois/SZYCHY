import { authorization } from './routes';
import * as api from './api';

export const login = (body) => {
  return api.post(`${authorization()}/login`, body);
};
