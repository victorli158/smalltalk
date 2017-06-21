import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const TopicButton = ({ label, onPress }) => (
  <View style={{flex: 1, backgroundColor: 'orange'}}>
    <TouchableOpacity
      onPress={onPress}
    >
      <Text style={styles.TopicButtonText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

export default TopicButton;
