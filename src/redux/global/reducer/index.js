import { handleActions } from 'redux-actions';

export default handleActions(
  {
    'APP/LOADING': (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    'APP/PROMPT': (state, action) => ({
      ...state,
      promptEvent: action.payload,
    }),
  },
  { isLoading: false, promptEvent: null },
);
