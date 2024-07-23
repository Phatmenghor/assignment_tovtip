import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import PhoneNumberSelect from '../../../components/PhoneNumberSelect';
import TextInputComponent from '../../../components/TextInputComponent';
import ButtonLoader from '../../../components/ButtonLoader';
import {loginWithPhone} from '../../../api/authService';
import {setToken} from '../../../utils/tokenManager';
import {CommonActions, useNavigation} from '@react-navigation/native';

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string | null>(null); // Separate error state for email
  const [passwordError, setPasswordError] = useState<string | null>(null); // Separate error state for password
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const handlePassChange = (text: string) => {
    setPassword(text);
  };

  async function onSubmid() {
    setPhoneError(null);
    setPasswordError(null);

    setIsLoading(true);
    const response = await loginWithPhone({
      phone: phoneNumber,
      password,
      countryCode: '+855',
    });

    if (response.message === 'Success') {
      await setToken(response.data.access_token);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Profile'}],
        }),
      );
    } else if (response.includes('Phone number does not exist')) {
      setPhoneError(response);
    } else if (response.includes('Incorrect password')) {
      setPasswordError(response);
    }
    setIsLoading(false);
  }
  return (
    <View style={styles.conEmail}>
      <PhoneNumberSelect
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholder="XXX XXX XXX XXX"
        style={styles.wrapPhone}
        error={phoneError}
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
      <ButtonLoader
        onPress={onSubmid}
        disabled={!phoneNumber.trim() || !password.trim()}
        loading={isLoading}
      />
    </View>
  );
};

export default PhoneLogin;
