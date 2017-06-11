import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const TopicButton = ({ label, onPress }) => (
  <View style={styles.TopicButtonContainer}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.TopicButton}
    >
      <Text style={styles.TopicButtonText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

export default TopicButton;
