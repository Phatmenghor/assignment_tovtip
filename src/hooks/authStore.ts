import {useState} from 'react';
import {loginWithEmail, loginWithPhone} from '../api/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginWithEmail(email, password);
      console.log('### ===response', response);
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const loginPhoneNumber = async (
    phone: string,
    countryCode: string,
    password: string,
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginWithPhone(countryCode, phone, password);
      return response;
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {loginEmail, loginPhoneNumber, loading, error};
};
