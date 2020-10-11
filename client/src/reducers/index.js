import { combineReducers } from 'redux';
import auth from './auth';
import boards from './boards';
import columns from './columns';
import cards from './cards';
export default combineReducers({
  auth,
  boards,
  columns,
  cards,
});
