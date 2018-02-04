import { connect } from 'react-redux';
import Session from './session';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return (
    {
      loggedIn: Boolean(state.session.currentUser)
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
