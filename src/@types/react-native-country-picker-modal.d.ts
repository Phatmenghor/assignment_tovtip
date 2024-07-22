// src/@types/react-native-country-picker-modal.d.ts
declare module 'react-native-country-picker-modal' {
  import {Component} from 'react';
  import {ViewStyle, TextStyle, StyleProp} from 'react-native';

  export interface Country {
    code: string;
    name: string;
    flag: string;
    callingCode: string;
  }

  export interface CountryPickerProps {
    visible: boolean;
    withFilter?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withEmoji?: boolean;
    withFlag?: boolean;
    withCountryNameButton?: boolean;
    onSelect?: (country: Country) => void;
    onClose?: () => void;
    containerButtonStyle?: StyleProp<ViewStyle>;
    renderFlag?: (country: Country) => JSX.Element;
    closeButtonImage?: JSX.Element;
    filterPlaceholder?: string;
    countryCode?: string;
    style?: {
      container?: StyleProp<ViewStyle>;
      text?: StyleProp<TextStyle>;
      placeholder?: StyleProp<TextStyle>;
    };
  }

  export default class CountryPicker extends Component<CountryPickerProps> {}
}
