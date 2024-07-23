import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import ButtonLoader from '../../../components/ButtonLoader';
import TextInputComponent from '../../../components/TextInputComponent';
import {loginWithEmail} from '../../../api/authService';
import {setToken} from '../../../utils/tokenManager';
import {ApiError} from '../../../models/errorResponse';
import {CommonActions, useNavigation} from '@react-navigation/native';

const EmailLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigation = useNavigation();

  async function onSubmid() {
    setEmailError(null);
    setPasswordError(null);

    callToApi();
  }

  async function callToApi() {
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

  function handleEmailChange(text: string) {
    setEmail(text);
  }

  function handlePassChange(text: string) {
    setPassword(text);
  }

  return (
    <View style={styles.conEmail}>
      <ScrollView bounces={false}>
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
        <View style={styles.wrapBottom}>
          <Text style={styles.txtForgot}>Forgot password</Text>
        </View>
      </ScrollView>
      <ButtonLoader
        onPress={onSubmid}
        loading={isLoading}
        disabled={!email.trim() || !password.trim()}
      />
    </View>
  );
};

export default EmailLogin;
