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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartChat);
