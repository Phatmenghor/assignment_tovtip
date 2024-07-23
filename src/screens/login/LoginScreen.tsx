import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {styles} from './LoginStyles';
import PhoneLogin from './component/PhoneLogin';
import EmailLogin from './component/EmailLogin';
import TabViewComponent from '../../components/TabViewComponent';

const LoginScreen = () => {
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
