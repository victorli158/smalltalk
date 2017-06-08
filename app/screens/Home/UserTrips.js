import React from 'react';

class UserTrips extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let trips = this.props.currentUser.trips;
  }
}
