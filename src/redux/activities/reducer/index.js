import { handleActions } from 'redux-actions';

export default handleActions(
  {
    'ACTIVITIES/ACTIVATE_DRAWER': (state, action) => ({
      ...state,
      drawerActive: true,
      activeActivityId: action.payload,
    }),
    'ACTIVITIES/DEACTIVATE_DRAWER': (state, action) => ({
      ...state,
      drawerActive: false,
      activeActivityId: 0,
    }),
  },
  { drawerActive: false, activeActivityId: 0 },
);
