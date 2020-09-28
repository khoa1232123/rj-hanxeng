import {
  FETCH_MOVIE_CAST,
  FETCH_MOVIE_DATA,
  FETCH_MOVIE_DETAIL,
} from '../types';

const initState = {
  movieList: [],
  movieDetail: {},
  castList: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_MOVIE_DATA:
      return {
        ...state,
        movieList: [...state.movieList, ...action.payload.results],
      };
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case FETCH_MOVIE_CAST:
      return {
        ...state,
        castList: action.payload,
      };
    default:
      return state;
  }
}
