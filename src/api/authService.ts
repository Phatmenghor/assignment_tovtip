import api from './api';

type TypeEmail = {
  email: string;
  password: string;
};

export const loginWithEmail = async ({email, password}: TypeEmail) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    console.log('## ==response', response);
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message || 'An error occurred';
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
    const response = await api.post('/auth/login', {
      countryCode,
      phone,
      password,
    });
    console.log('## ==response', response);
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message || 'An error occurred';
  }
};
