import * as Keychain from 'react-native-keychain';

// Set the token
async function setToken(token: string): Promise<void> {
  try {
    await Keychain.setGenericPassword('token', token);
  } catch (error) {
    console.error('Failed to store token', error);
  }
}

// Get the token
async function getToken(): Promise<string | null> {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Token retrieved successfully');
      return credentials.password; // The token is stored in `password`
    } else {
      return null;
    }
  } catch (error) {
    console.error('Failed to retrieve token', error);
    return null;
  }
}

// Clear the token
async function clearToken(): Promise<void> {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token cleared successfully');
  } catch (error) {
    console.error('Failed to clear token', error);
  }
}

export {setToken, getToken, clearToken};
