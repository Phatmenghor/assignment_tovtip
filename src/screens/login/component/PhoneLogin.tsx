import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import PhoneNumberSelect from '../../../components/PhoneNumberSelect';
import TextInputComponent from '../../../components/TextInputComponent';
import ButtonLoader from '../../../components/ButtonLoader';
import {loginWithPhone} from '../../../api/authService';
import {setToken} from '../../../utils/tokenManager';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ApiError} from '../../../models/errorResponse';
import {countryCambodia, CountryModel} from '../../../constants/codeCountry';
import {routeName} from '../../../constants/routeName';
import ShowToast from '../../../components/ShowToast';

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] =
    useState<CountryModel>(countryCambodia);

  async function onSubmid() {
    setPhoneError(false);
    setPasswordError(false);

    callToApi();
  }

  async function callToApi() {
    setIsLoading(true);
    try {
      const response = await loginWithPhone({
        phone: phoneNumber,
        password,
        countryCode: selectedCountry.callingCode[0],
      });
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
      if (responseError.message.includes('Phone number does not exist')) {
        setPhoneError(true);
        ShowToast('error', 'Login Failed', `${responseError.message}`);
      } else if (responseError.message.includes('Incorrect password')) {
        setPasswordError(true);
        ShowToast('error', 'Login Failed', `${responseError.message}`);
      }
    }
    setIsLoading(false);
  }

  function handleCountrySelect(country: CountryModel) {
    setSelectedCountry(country);
  }

  const handlePhoneChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericText);
  };

  return (
    <View style={styles.conEmail}>
      <ScrollView bounces={false}>
        {/* Phone number Input */}
        <PhoneNumberSelect
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          placeholder="XXX XXX XXX XXX"
          style={styles.wrapPhone}
          error={phoneError}
          selectedCountry={selectedCountry}
          onSelectCountry={handleCountrySelect}
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
        disabled={!phoneNumber.trim() || !password.trim()}
        loading={isLoading}
      />
    </View>
  );
};

export default PhoneLogin;
