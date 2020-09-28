import { GET_FAVORITE_LIST } from '../types';

const initState = {
  favoriteList: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.payload,
      };
    default:
      return state;
  }
}
