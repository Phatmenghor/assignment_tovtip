import {AuthResponse} from '../models/apiResponse';
import {ApiError} from '../models/errorResponse';
import api from './api';

type TypeEmail = {
  email: string;
  password: string;
};
export const loginWithEmail = async ({email, password}: TypeEmail) => {
  try {
    const response = await api.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    const apiError: ApiError = error.response?.data;
    throw apiError;
  }
};

type TypePhone = {
  countryCode: string;
  phone: string;
  password: string;
};
export const loginWithPhone = async ({
  countryCode,
  phone,
  password,
}: TypePhone) => {
  try {
    const response = await api.post<AuthResponse>('/auth/login', {
      countryCode,
      phone,
      password,
    });
    return response.data;
  } catch (error: any) {
    const apiError: ApiError = error.response?.data;
    throw apiError;
  }
};
