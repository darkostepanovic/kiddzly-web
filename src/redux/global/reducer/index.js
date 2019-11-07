import { handleActions } from 'redux-actions';

export default handleActions(
  {
    'APP/LOADING': (state, action) => ({
      isLoading: action.payload,
    }),
    'APP/HOMESCREEN_PROMPT': (state, action) => ({
      promptEvent: action.payload,
    }),
  },
  { isLoading: true, promptEvent: null },
);
