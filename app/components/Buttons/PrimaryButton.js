import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const PrimaryButton = ({ text, onPress }) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default PrimaryButton;
