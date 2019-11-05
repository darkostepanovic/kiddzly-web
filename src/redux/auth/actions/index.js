import { createActions } from 'redux-actions';

const authActions = createActions({
  AUTH: {
    SET_TOKEN: token => token,
    SET_USER_DATA: userData => userData,
    SET_RESET_PASSWORD_HASH: hash => hash,
    REMOVE_ACCESS_TOKEN: () => {},
    LOGOUT: () => {},
  },
});

export default authActions;
