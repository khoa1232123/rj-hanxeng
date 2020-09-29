import {
  GET_FAVORITE_LIST,
  REMOVE_FAVORITE,
  GET_FAVORITE_NUMBER,
} from '../types';

const initState = {
  favoriteList: [],
  favoriteNumber: 0,
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.payload,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
      };
    case GET_FAVORITE_NUMBER:
      return {
        ...state,
        favoriteNumber: action.payload,
      };
    default:
      return state;
  }
}
