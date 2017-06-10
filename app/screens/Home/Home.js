import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';
import moment from 'moment';

import colors from '../../config/colors';
import { PrimaryButton } from '../../components/Buttons';
import { users } from '../../config/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleCreatePress = this.handleCreatePress.bind(this);
    this.state = {
      users: users
    };
  }

  handleCreatePress() {
    this.props.navigation.navigate('StartChat');
  }

  render() {
    return (
      <ScrollView>
        <PrimaryButton label="Start Chat" onPress={this.handleCreatePress} />
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
