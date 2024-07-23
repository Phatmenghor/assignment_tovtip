import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/color';

interface ButtonLoaderProps extends TouchableOpacityProps {
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  loading = false,
  disabled = false,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      style={[styles.btnSubmid, disabled ? styles.isDisble : styles.isUnDisble]}
      {...props}>
      <View style={styles.wrapText}>
        <Text style={styles.txtForgot}>Continue</Text>
      </View>
      {loading && <ActivityIndicator animating={true} color="white" />}
      {!loading && (
        <MaterialIcon name="arrow-forward" size={20} color="black" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnSubmid: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  isDisble: {
    backgroundColor: colors.disableText,
  },
  isUnDisble: {
    backgroundColor: colors.primaryColor,
  },
  wrapText: {
    flex: 1,
    alignItems: 'center',
  },
  txtForgot: {
    fontSize: 14,
  },
});

export default ButtonLoader;
