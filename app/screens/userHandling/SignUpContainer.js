import { connect } from 'react-redux';
import SignUp from 'SignUp';
import { signUp } from '../../actions/sessionActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
