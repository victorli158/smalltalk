import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  TopicButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,

  },
  TopicButton: {
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderWidth: 5,
    borderRadius: 10,
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
