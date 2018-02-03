import * as APIUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
