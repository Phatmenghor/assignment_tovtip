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
  },
  wrapBottom: {
    alignItems: 'center',
    marginTop: 16,
  },
  txtForgot: {
    fontSize: 14,
  },
  btnSubmid: {
    height: 44,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 4,
  },
});

export {styles};
