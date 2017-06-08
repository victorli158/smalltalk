import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';
import moment from 'moment';

import colors from '../../config/colors';
import { PrimaryButton } from '../../components/Buttons';
import { trips } from '../../config/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleCreatePress = this.handleCreatePress.bind(this);
    this.state = {
      currentUser: this.props.currentUser,
      trips: [],
    };
  }

  handleCreatePress() {
    this.props.navigation.navigate('CreateTrip');
  }

  render() {
    this.state.trips = trips;
    console.log(this.state.trips);
    return (
      <ScrollView>
        <PrimaryButton label="Create Trip" onPress={this.handleCreatePress} />
        {this.state.trips.map((trip, idx) => (
          <View key={idx} style={{ borderWidth: 1, margin: 5, alignItems: 'center' }}>
            <Text>{trip.title}</Text>
            <Text>
              {moment(trip.startDate).format('MMMM Do, YYYY')} -
              {moment(trip.endDate).format('MMMM Do, YYYY')}
            </Text>
            <Text>{trip.location}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
