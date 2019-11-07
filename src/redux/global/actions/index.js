import { createActions } from 'redux-actions';

const appActions = createActions({
  APP: {
    LOADING: isLoading => isLoading,
    PROMPT: event => event,
  },
});

export default appActions;
