import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';

import colors from '../../config/colors';
import { PrimaryButton } from '../../components/Buttons';
import { trips } from '../../config/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleCreatePress = this.handleCreatePress.bind(this);
    this.state = {
      currentUser: this.props.currentUser,
      trips: "",
    };
  }

  handleCreatePress() {
    this.props.navigation.navigate('CreateTrip');
  }

  render() {
    for (let i = 0; i < trips.length; i++) {
      this.state.trips += trips[i].title;
    }

    return (
      <ScrollView>
        <PrimaryButton label="Create Trip" onPress={this.handleCreatePress} />
        <Text>Upcoming Trips</Text>
          <Text>{this.state.trips}</Text>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
