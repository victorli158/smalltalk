import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  primaryButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderWidth: 5,
    borderRadius: 10,
  },
  primaryButtonText: {
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
