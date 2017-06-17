import { connect } from 'react-redux';
import Chat from './Chat';
import { getSessionKey } from '../../actions/session/sessionActions';

const mapStateToProps = ({ session }) => ({
  session,
  session2: session
});

const mapDispatchToProps = (dispatch) => ({
  getSessionKey: () => dispatch(getSessionKey()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
