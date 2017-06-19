import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  username: state.session.username
});

export default connect(mapStateToProps, null)(Home);
