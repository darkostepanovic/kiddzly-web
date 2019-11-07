import { createActions } from 'redux-actions';

const appActions = createActions({
  APP: {
    LOADING: isLoading => isLoading,
    HOMESCREEN_PROMPT: event => event,
  },
});

export default appActions;
