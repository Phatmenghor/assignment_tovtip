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
import {CountryModel} from '../constants/codeCountry';

interface PhoneNumberSelectProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string | null;
  style?: object;
  selectedCountry: CountryModel;
  onSelectCountry: (country: CountryModel) => void;
}

const PhoneNumberSelect: React.FC<PhoneNumberSelectProps> = ({
  value,
  onChangeText,
  placeholder = 'XXX XXX XXX XXX',
  error = null,
  style,
  selectedCountry,
  onSelectCountry,
}) => {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onSelect = (country: any) => {
    onSelectCountry(country);
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
          blurOnSubmit={false}
        />
      </View>

      <CountryPicker
        visible={visible}
        withFilter={true}
        withAlphaFilter={true}
        withCallingCode={true}
        withEmoji={true}
        withFlag={true}
        withCountryNameButton={true}
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
    alignItems: 'center',
    backgroundColor: colors.backgorund,
  },
  buttonText: {
    marginLeft: 8,
    color: colors.textColor,
  },
  textInput: {
    height: 54,

    paddingLeft: 8,
    paddingRight: 16,
    fontSize: 14,
    flex: 1,
    backgroundColor: colors.backgorund,
  },
  btnSelect: {
    marginHorizontal: 16,
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
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
    borderWidth: 1,
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
