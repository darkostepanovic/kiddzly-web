import { handleActions } from 'redux-actions';

export default handleActions(
  {
    'APP/LOADING': (state, action) => ({
      isLoading: action.payload,
    }),
  },
  { isLoading: true },
);
