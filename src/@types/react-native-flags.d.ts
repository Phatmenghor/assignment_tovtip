// src/declarations.d.ts
declare module 'react-native-flags' {
  import {Component} from 'react';
  import {ViewStyle, TextStyle} from 'react-native';

  interface FlagProps {
    code: string; // ISO 3166-1 alpha-2 country code
    size?: number;
    style?: ViewStyle | TextStyle;
  }

  export default class Flag extends Component<FlagProps> {}
}
