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

interface PhoneNumberSelectProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const PhoneNumberSelect: React.FC<PhoneNumberSelectProps> = ({
  value,
  onChangeText,
  placeholder = 'Type your phone number',
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
    <View style={styles.container}>
      <View
        style={[styles.wrapDis, isFocused ? styles.focused : styles.unfocused]}>
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
            isFocused ? styles.lineFocus : styles.lineUnfocused,
          ]}
        />
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textColor}
          cursorColor={colors.primaryColor}
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
    </View>
  );
};

const styles = StyleSheet.create({
  countryText: {
    fontSize: 16,
  },
  container: {
    marginTop: 24,
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
    borderColor: colors.textColor,
    borderWidth: 1,
  },
  lineFocus: {
    backgroundColor: colors.primaryColor,
    width: 2,
  },
  lineUnfocused: {
    backgroundColor: colors.textColor,
  },
});

export default PhoneNumberSelect;
