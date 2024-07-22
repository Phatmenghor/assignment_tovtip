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
  loading?: boolean; // Indicates whether the button is in a loading state
  onPress: () => void; // Function to be called when the button is pressed
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  loading = false,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={styles.btnSubmid}
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
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 24,
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
