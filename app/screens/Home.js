import React, { Component, PropTypes } from 'react';
import { FlatList, View, Text } from 'react-native';

import colors from '../config/colors';
import { PrimaryButton } from '../components/Buttons';

class Home extends Component {
  render() {
    return (
      <View>
        <PrimaryButton text="Create Trip" onPress={() => null} />
      </View>
    );
  }
}

export default Home;
