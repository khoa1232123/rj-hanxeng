import { FETCH_MOVIE_DATA } from '../types';

const initState = {
  movieList: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DATA:
      return { ...state, movieList: action.payload.results };
    default:
      return state;
  }
}
