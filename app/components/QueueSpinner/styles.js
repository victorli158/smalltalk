import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  spinner: {
    marginBottom: 50
  },
  btn: {
    marginTop: 20
  },
  text: {
    color: "black"
  }
});
