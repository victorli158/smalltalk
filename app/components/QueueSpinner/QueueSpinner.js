import Spinner from 'react-native-spinkit';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

class QueueSpinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner style={styles.spinner} isVisible={true} size={100} type='FadingCircleAlt' color={colors.primary}/>
      </View>
    );
  }
}

export default QueueSpinner;
