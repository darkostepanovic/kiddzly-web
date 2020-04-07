import { createActions } from 'redux-actions';

const appActions = createActions({
  ACTIVITIES: {
    ACTIVATE_DRAWER: activityId => activityId,
    DEACTIVATE_DRAWER: () => {},
  },
});

export default appActions;
