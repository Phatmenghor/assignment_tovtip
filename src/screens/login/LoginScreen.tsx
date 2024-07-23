// src/screens/LoginScreen.tsx

import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './LoginStyles';
import {RootStackParamList} from '../../@types/navigation';
import PhoneLogin from './component/PhoneLogin';
import EmailLogin from './component/EmailLogin';
import TabViewComponent from '../../components/TabViewComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({}) => {
  const screens = [
    {
      title: 'Email',
      component: EmailLogin,
    },
    {
      title: 'Phone',
      component: PhoneLogin,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtHead}>Login</Text>
      <TabViewComponent screens={screens} style={styles.tabView} />
    </SafeAreaView>
  );
};

export default LoginScreen;
