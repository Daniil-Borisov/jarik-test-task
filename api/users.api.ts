import { HttpClient } from './api-client';
import { API_ENDPOINTS } from './api-endpoints';
import type { UserType } from '../types/user.types';

export const fetchUsers = async (): Promise<UserType[]> => {
  return HttpClient.get<UserType[]>(API_ENDPOINTS.USERS);
};

