import { connect } from 'react-redux';
import Login from './Login';
import { signIn, signUp, signOut } from '../../actions/session/sessionActions';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
