/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../LoginStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import custom icons

const EmailLogin = () => {
  return (
    <View style={styles.conEmail}>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Type your email"
        right={<TextInput.Affix text="/100" />}
        left={
          <TextInput.Icon
            icon={() => <Icon name="email" size={24} color="black" />}
          />
        }
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
        <TouchableOpacity style={styles.btnSubmid}>
          <Text style={styles.txtForgot}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailLogin;
