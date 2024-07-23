import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import ButtonLoader from '../../../components/ButtonLoader';
import TextInputComponent from '../../../components/TextInputComponent';
import {loginWithEmail} from '../../../api/authService';
import {setToken} from '../../../utils/tokenManager';
import {ApiError} from '../../../models/errorResponse';
import {CommonActions, useNavigation} from '@react-navigation/native';

const EmailLogin = () => {
  const [password, setPassword] = useState<string>('Pwd@#124!');
  const [email, setEmail] = useState<string>('dummy@gmail.com');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null); // Separate error state for email
  const [passwordError, setPasswordError] = useState<string | null>(null); // Separate error state for password
  const navigation = useNavigation();

  async function onSubmid() {
    setEmailError(null);
    setPasswordError(null);
    setIsLoading(true);
    try {
      const response = await loginWithEmail({email, password});
      await setToken(response.data.access_token);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Profile'}],
        }),
      );
    } catch (error) {
      const responseError = error as ApiError;
      if (responseError.message.includes('Email does not exist')) {
        setEmailError(responseError.message);
      } else if (responseError.message.includes('Incorrect password')) {
        setPasswordError(responseError.message);
      }
    }

    setIsLoading(false);
  }

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePassChange = (text: string) => {
    setPassword(text);
  };

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

      <Pressable style={styles.wrapBottom}>
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
