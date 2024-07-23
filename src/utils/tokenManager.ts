// tokenManager.ts
import * as Keychain from 'react-native-keychain';

// Store JWT token
export const storeToken = async (token: string) => {
  try {
    console.log('### ===credentialstoken', token);
    await Keychain.setGenericPassword('jwt', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Failed to store token', error);
  }
};

// Retrieve JWT token
export const getToken = async (): Promise<string | null> => {
  try {
    const credentials = await Keychain.getGenericPassword();
    console.log('### ===credentials', credentials);
    if (credentials) {
      return credentials.password; // This is the token
    } else {
      return null;
    }
  } catch (error) {
    console.error('Failed to retrieve token', error);
    return null;
  }
};

// Remove JWT token
export const removeToken = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token removed successfully');
  } catch (error) {
    console.error('Failed to remove token', error);
  }
};
