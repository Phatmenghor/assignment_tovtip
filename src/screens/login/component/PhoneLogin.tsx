import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../LoginStyles';

const PhoneLogin = () => {
  return (
    <View style={styles.conEmail}>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Type your email"
        right={<TextInput.Affix text="/100" />}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Type your password"
        right={<TextInput.Affix text="/100" />} // Affix at the end
        style={styles.input}
      />

      <View style={styles.wrapBottom}>
        <Text style={styles.txtForgot}>Forgot password</Text>
      </View>

      <TouchableOpacity style={styles.btnSubmid}>
        <Text style={styles.txtForgot}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneLogin;
