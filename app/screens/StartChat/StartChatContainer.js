import { connect } from 'react-redux';

import { createTrip } from '../../actions/trip/tripActions';
import StartChat from './StartChat';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTrip: (id, trip) => dispatch(createTrip(id, trip)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartChat);
