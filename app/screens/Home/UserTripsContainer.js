import { connect } from 'react-redux';

import { receiveAllTrips } from '../../actions/trip/tripActions';
import UserTrips from './UserTrips';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveAllTrips: (trips) => dispatch(receiveAllTrips(trips))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTrips);
