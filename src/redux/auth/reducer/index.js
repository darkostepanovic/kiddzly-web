import { handleActions } from 'redux-actions';

export default handleActions(
  {
    'AUTH/SET_TOKEN': (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
    'AUTH/LOGOUT': state => ({
      ...state,
      accessToken: '',
    }),
    'AUTH/SET_RESET_PASSWORD_HASH': (state, action) => ({
      ...state,
      resetPasswordHash: action.payload,
    }),
  },
  {
    accessToken: '',
    resetPasswordHash: '',
  },
);
