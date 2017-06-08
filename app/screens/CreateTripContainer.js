import { connect } from 'react-redux';
import CreateTrip from './CreateTrip';

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
)(CreateTrip);
