import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  titlePF: {
    fontSize: 32,
    marginTop: 44,
  },
  wrapBody: {
    marginHorizontal: 16,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewDisPlay: {
    height: 54,
    backgroundColor: colors.backgorund,
    borderRadius: 4,
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: colors.disableText,
  },
  txtDisplay: {
    fontSize: 14,
    paddingHorizontal: 16,
  },
  rowName: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 44,
  },
  emailDisPlay: {
    flexDirection: 'row',
    height: 54,
    backgroundColor: colors.backgorund,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: colors.disableText,
    paddingLeft: 16,
  },
  rowGen: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  txtGen: {
    fontSize: 16,
  },
  wrapGen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  txtSex: {
    fontSize: 16,
    marginLeft: 4,
  },
  wrapGender: {
    flexDirection: 'row',
  },
  btnLogout: {
    backgroundColor: colors.primaryColor,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 32,
    marginHorizontal: 16,
  },
  txtLog: {
    fontSize: 16,
    color: colors.textColor,
    fontWeight: '600',
  },
  flexCon: {
    flex: 1,
  },
});

export {styles};
