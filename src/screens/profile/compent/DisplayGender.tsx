import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../ProfileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants/color';

interface DisplayGenderProps {
  gender: string;
  selected: string | null | undefined;
}

const DisplayGender: React.FC<DisplayGenderProps> = ({gender, selected}) => {
  return (
    <View style={styles.wrapGen}>
      {gender === selected ? (
        <Ionicons
          name={'radio-button-on-sharp'}
          size={22}
          color={colors.primaryColor}
        />
      ) : (
        <Ionicons
          name={'radio-button-off-sharp'}
          size={22}
          color={colors.disableText}
        />
      )}
      <Text style={styles.txtSex}>{gender}</Text>
    </View>
  );
};

export default DisplayGender;
