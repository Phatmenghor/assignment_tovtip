// src/utils/storage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (error) {
    console.error('Failed to save token:', error);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('@token');
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
};
