import { combineReducers } from 'redux';
import global from './global';
import activitiesRedux from './activities';

export default combineReducers({
  global: global.reducer,
  activities: activitiesRedux.reducer,
});
