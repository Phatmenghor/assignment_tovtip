import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {colors} from '../constants/color';

interface CustomLoadingProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

const Loading: React.FC<CustomLoadingProps> = ({
  message = 'Loading ...',
  size = 'large',
  color = colors.primaryColor,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={[styles.text, {color}]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Loading;
