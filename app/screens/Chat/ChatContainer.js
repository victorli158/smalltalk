import { connect } from 'react-redux';
import Chat from './Chat';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
