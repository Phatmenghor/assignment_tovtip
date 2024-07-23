import {RootStackParamList} from '../@types/navigation';

const routeName: {
  [key in keyof RootStackParamList]: string;
} = {
  Login: 'Login', // Use 'Login' to match the key
  Profile: 'Profile', // Use 'Profile' to match the key
};

export {routeName};
