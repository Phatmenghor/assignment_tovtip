/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
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
  error?: string | null;
}

const TextInputComponent: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  label = 'Input',
  style,
  type = 'password',
  error = null,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        value={value}
        onChangeText={onChangeText}
        theme={{
          colors: {
            primary: error ? 'red' : colors.primaryColor,
          },
        }}
        outlineStyle={{
          borderColor: error ? 'red' : colors.disableText,
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
        textColor={colors.textColor}
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

      {error && (
        <HelperText type="error" visible={!!error} style={styles.errorText}>
          {error}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
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
  errorText: {
    fontSize: 12,
    paddingHorizontal: 0,
    marginTop: 4,
  },
});

export default TextInputComponent;
