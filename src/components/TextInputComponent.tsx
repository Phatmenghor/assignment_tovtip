/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Example for email icon
import {colors} from '../constants/color';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  style?: object;
  type?: 'email' | 'password'; // Type to determine if it's an email or password
}

const TextInputComponent: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  label = 'Input',
  style,
  type = 'password',
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <TextInput
      mode="outlined"
      label={label}
      secureTextEntry={type === 'password' && !isPasswordVisible}
      value={value}
      onChangeText={onChangeText}
      theme={{
        colors: {
          primary: colors.primaryColor,
        },
      }}
      left={
        <TextInput.Icon
          icon={() => (
            <Icon
              name={type === 'email' ? 'email' : 'lock'} // Change icon based on type
              size={24}
              color="black"
              style={styles.icon}
            />
          )}
        />
      }
      right={
        type === 'password' ? (
          <TextInput.Icon
            icon={() => (
              <MaterialIcon
                name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                size={24}
                color="black"
                onPress={togglePasswordVisibility}
                style={styles.icon}
              />
            )}
          />
        ) : null // No right icon for email
      }
      style={[styles.input, style]} // Merge custom style with default
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 16,
    height: 54,
    backgroundColor: colors.backgorund,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },
  icon: {
    marginTop: 12,
  },
});

export default TextInputComponent;
