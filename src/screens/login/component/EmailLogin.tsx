import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import ButtonLoader from '../../../components/ButtonLoader';
import TextInputComponent from '../../../components/TextInputComponent';
import {loginWithEmail} from '../../../api/authService';
import {getToken, storeToken} from '../../../utils/tokenManager';

const EmailLogin = () => {
  const [password, setPassword] = useState<string>('Pwd@#124!');
  const [email, setEmail] = useState<string>('dummy@gmail.com');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null); // Separate error state for email
  const [passwordError, setPasswordError] = useState<string | null>(null); // Separate error state for password

  async function onSubmid() {
    setEmailError(null);
    setPasswordError(null);
    setIsLoading(true);
    const response = await loginWithEmail({email, password});
    if (response.message === 'Success') {
      await storeToken(response.data.access_token);
    } else if (response.includes('Email does not exist')) {
      setEmailError(response);
    } else if (response.includes('Incorrect password')) {
      setPasswordError(response);
    }
    setIsLoading(false);
  }

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePassChange = (text: string) => {
    setPassword(text);
  };

  async function onPress() {
    const res = await getToken();
  }

  return (
    <View style={styles.conEmail}>
      <TextInputComponent
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        label="Email"
        type="email"
        error={emailError}
        style={styles.wrapEmail}
      />

      <TextInputComponent
        value={password}
        onChangeText={handlePassChange}
        placeholder="Enter your password"
        label="Password"
        type="password"
        error={passwordError}
        style={styles.wrapEmail}
      />

      <Pressable onPress={onPress} style={styles.wrapBottom}>
        <Text style={styles.txtForgot}>Forgot password</Text>
      </Pressable>

      <ButtonLoader
        onPress={onSubmid}
        loading={isLoading}
        disabled={!email.trim() || !password.trim()}
      />
    </View>
  );
};

export default EmailLogin;
