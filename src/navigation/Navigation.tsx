import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {useEffect, useState} from 'react';
import {getToken} from '../utils/tokenManager';
import {routeName} from '../constants/routeName';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [initialRoute, setInitialRoute] = useState('Login');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    setLoading(true);
    const token = await getToken();
    if (token) {
      setInitialRoute('Profile');
    } else {
      setInitialRoute('Login');
    }
    setLoading(false);
  };

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routeName.Login} component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
