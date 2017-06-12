import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  TopicButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: 200
  },
  TopicButton: {
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderWidth: 5,
    borderRadius: 10,
    width: 200
  },
  TopicButtonText: {
    textAlign: 'center',
    paddingVertical: 15,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
