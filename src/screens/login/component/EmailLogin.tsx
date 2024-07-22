import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import ButtonLoader from '../../../components/ButtonLoader';
import TextInputComponent from '../../../components/TextInputComponent';

const EmailLogin = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function onSubmid() {}

  return (
    <View style={styles.conEmail}>
      <TextInputComponent
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        label="Email"
        type="email" // Email type
      />

      <TextInputComponent
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        label="Password"
        type="password"
      />

      <View style={styles.wrapBottom}>
        <Text style={styles.txtForgot}>Forgot password</Text>
      </View>

      <ButtonLoader onPress={onSubmid} />
    </View>
  );
};

export default EmailLogin;
