import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import ButtonLoader from '../../../components/ButtonLoader';
import TextInputComponent from '../../../components/TextInputComponent';
import {loginWithEmail} from '../../../api/authService';
import {setToken} from '../../../utils/tokenManager';
import {ApiError} from '../../../models/errorResponse';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {routeName} from '../../../constants/routeName';
import {isValidEmail} from '../../../utils/stringUtils';
import ShowToast from '../../../components/ShowToast';

const EmailLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const navigation = useNavigation();

  async function onSubmid() {
    setEmailError(false);
    setPasswordError(false);

    if (email && !isValidEmail(email)) {
      setEmailError(true);
      ShowToast(
        'error',
        'Login Failed',
        'You have entered an invalid email address.',
      );
      return;
    }

    callToApi();
  }

  async function callToApi() {
    setIsLoading(true);
    try {
      const response = await loginWithEmail({email, password});
      ShowToast(
        'success',
        'Login Successful',
        'You have successfully logged in!',
      );
      await setToken(response.data.access_token);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: routeName.profile}],
        }),
      );
    } catch (error) {
      const responseError = error as ApiError;
      if (responseError.message.includes('Email does not exist')) {
        setEmailError(true);
        ShowToast('error', 'Login Failed', `${responseError.message}`);
      } else if (responseError.message.includes('Incorrect password')) {
        setPasswordError(true);
        ShowToast('error', 'Login Failed', `${responseError.message}`);
      }
    }
    setIsLoading(false);
  }

  return (
    <View style={styles.conEmail}>
      <ScrollView bounces={false}>
        {/* Email Input */}
        <TextInputComponent
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          label="Email"
          type="email"
          error={emailError}
          style={styles.wrapEmail}
        />

        {/* Password Input */}
        <TextInputComponent
          value={password}
          onChangeText={setPassword}
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
