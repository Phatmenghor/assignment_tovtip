// src/App.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {colors} from '../constants/color';
import {HelperText} from 'react-native-paper';

interface PhoneNumberSelectProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string | null;
  style?: object;
}

const PhoneNumberSelect: React.FC<PhoneNumberSelectProps> = ({
  value,
  onChangeText,
  placeholder = 'XXX XXX XXX XXX',
  error = null,
  style,
}) => {
  const defaultCountry = {
    cca2: 'KH',
    callingCode: '855',
    flag: 'KH',
    name: 'Cambodia',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
  };
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onSelect = (country: any) => {
    setSelectedCountry(country);
    setVisible(false);
  };

  function openCountryPicker() {
    setVisible(true);
  }

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.wrapDis,
          error ? styles.error : isFocused ? styles.focused : styles.unfocused,
        ]}>
        <TouchableOpacity style={styles.btnSelect} onPress={openCountryPicker}>
          <Image
            style={styles.sizeImg}
            source={{
              uri: `https://flagcdn.com/w20/${selectedCountry.cca2.toLowerCase()}.png`,
            }}
          />
          <Text style={styles.buttonText}>+{selectedCountry.callingCode}</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.line,
            error
              ? styles.errorLine
              : isFocused
              ? styles.lineFocus
              : styles.lineUnfocused,
          ]}
        />
        <TextInput
          selectionColor={colors.primaryColor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.textInput}
          value={value}
          keyboardType="number-pad"
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textColor}
        />
      </View>

      <CountryPicker
        visible={visible}
        withFilter={true} // Enable filter
        withAlphaFilter={true} // Enable alphabetical filter
        withCallingCode={true} // Display calling codes
        withEmoji={true} // Display emojis with flags
        withFlag={true} // Display flags
        withCountryNameButton={true} // Do not display country name as a button
        onSelect={onSelect}
        onClose={() => setVisible(false)}
        containerButtonStyle={styles.button}
        filterPlaceholder="Search..."
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
  countryText: {
    fontSize: 16,
  },
  container: {
    marginTop: 8,
  },
  button: {
    display: 'none',
  },
  wrapDis: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    height: 54,
    alignItems: 'center',
    backgroundColor: colors.backgorund,
  },
  buttonText: {
    marginLeft: 8,
    color: colors.textColor,
  },
  textInput: {
    paddingLeft: 8,
    paddingRight: 16,
    fontSize: 14,
    flex: 1,
    backgroundColor: colors.backgorund,
  },
  btnSelect: {
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  line: {
    width: 1,
    height: '100%',
  },
  sizeImg: {
    width: 24,
    height: 16,
  },
  focused: {
    borderColor: colors.primaryColor,
    borderWidth: 2,
  },
  unfocused: {
    borderColor: colors.disableText,
    borderWidth: 1,
  },
  lineFocus: {
    backgroundColor: colors.primaryColor,
    width: 2,
  },
  lineUnfocused: {
    backgroundColor: colors.disableText,
  },

  errorText: {
    fontSize: 12,
    paddingHorizontal: 0,
    marginTop: 4,
  },
  error: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorLine: {
    backgroundColor: 'red',
    width: 1,
  },
});

export default PhoneNumberSelect;
