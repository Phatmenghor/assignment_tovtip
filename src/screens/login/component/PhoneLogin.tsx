import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../LoginStyles';
import PhoneNumberSelect from '../../../components/PhoneNumberSelect';
import TextInputComponent from '../../../components/TextInputComponent';
import ButtonLoader from '../../../components/ButtonLoader';

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  function onSubmid() {}
  return (
    <View style={styles.conEmail}>
      <PhoneNumberSelect
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholder="XXX XXX XXX XXX"
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

export default PhoneLogin;
