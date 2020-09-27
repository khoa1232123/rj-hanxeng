import { combineReducers } from 'redux';
import user from './userReducer';
import movie from './movieReducer';

const rootReducer = combineReducers({
  user,
  movie,
});

export default rootReducer;
