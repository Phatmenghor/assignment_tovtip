import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txtHead: {
    fontSize: 34,
    marginTop: 20,
  },
  tabView: {
    marginTop: 32,
  },
  conEmail: {
    padding: 16,
  },
  input: {
    marginVertical: 10,
    height: 56,
    backgroundColor: colors.backgorund,
  },
  wrapBottom: {
    alignItems: 'center',
    marginTop: 16,
  },
  txtForgot: {
    fontSize: 16,
    color: colors.primaryColor,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  labelText: {
    fontSize: 16,
    color: 'black',
  },
});

export {styles};
