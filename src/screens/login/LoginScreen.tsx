// src/screens/LoginScreen.tsx

import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './LoginStyles';
import {RootStackParamList} from '../../types/navigation';
import PhoneLogin from './component/PhoneLogin';
import EmailLogin from './component/EmailLogin';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({}) => {
  const screens = [
    {
      title: 'First',
      component: EmailLogin,
    },
    {
      title: 'Second',
      component: PhoneLogin,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtHead}>Login</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
