import {useState, useEffect} from 'react';
import {storeToken, getToken} from '../utils/storage';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const savedToken = await getToken();
      setToken(savedToken);
    };
    loadToken();
  }, []);

  const saveToken = async (newToken: string) => {
    setToken(newToken);
    await storeToken(newToken);
  };

  return {token, saveToken};
};
