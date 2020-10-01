import {
  GET_FAVORITE_LIST,
  REMOVE_FAVORITE,
  GET_FAVORITE_NUMBER,
  GET_FAVORITED,
  ADD_FAVORITE,
} from '../types';

const initState = {
  favoriteList: [],
  favoriteNumber: 0,
  favorited: false,
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
        favoriteList: action.payload.newFavoriteList,
        favoriteNumber: action.payload.newFavoriteNumber,
        favorited: action.payload.newFavorited,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteNumber: action.payload.newFavoriteNumber,
        favorited: action.payload.newFavorited,
      };
    case GET_FAVORITE_NUMBER:
      return {
        ...state,
        favoriteNumber: action.payload,
      };
    case GET_FAVORITED:
      return {
        ...state,
        favorited: action.payload,
      };
    default:
      return state;
  }
}
