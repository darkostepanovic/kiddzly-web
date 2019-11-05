import { createActions } from 'redux-actions';

const appActions = createActions({
  APP: {
    LOADING: isLoading => isLoading,
  },
});

export default appActions;
