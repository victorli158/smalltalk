import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  TopicButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  TopicButton: {
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.secondary,
  },
  TopicButtonText: {
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
