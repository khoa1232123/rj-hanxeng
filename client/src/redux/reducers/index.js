import { combineReducers } from 'redux';
import user from './userReducer';
import movie from './movieReducer';
import favorite from './favoriteReducer';

const rootReducer = combineReducers({
  user,
  movie,
  favorite,
});

export default rootReducer;
