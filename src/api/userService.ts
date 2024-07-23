import {User} from '../models/apiResponse';
import {ApiError} from '../models/errorResponse';
import {getToken} from '../utils/tokenManager';
import api from './api';

export const getUserProfile = async () => {
  try {
    const token = await getToken();
    const response = await api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data as User;
  } catch (error: any) {
    const apiError: ApiError = error.response?.data;
    throw apiError;
  }
};
