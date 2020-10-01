import { fetchMovieData, fetchMovieDetailData } from '../../api/movie';
import { API_KEY, API_URL } from '../../components/Config';
import {
  FETCH_MOVIE_CAST,
  FETCH_MOVIE_DATA,
  FETCH_MOVIE_DETAIL,
} from '../types';

export function fetchMovie(page = 1) {
  return async (dispatch, getState) => {
    const { results } = await fetchMovieData(page);
    const {
      movie: { movieList },
    } = getState();
    if (page === 1) {
      dispatch({
        type: FETCH_MOVIE_DATA,
        payload: results,
      });
    } else {
      dispatch({
        type: FETCH_MOVIE_DATA,
        payload: [...movieList, ...results],
      });
    }
  };
}

export function fetchMovieDetail(movieId) {
  return async (dispatch) => {
    const { request } = await fetchMovieDetailData(movieId);
    dispatch({
      type: FETCH_MOVIE_DETAIL,
      payload: request,
    });
  };
}

export function fetchMovieCast(movieId) {
  return async (dispatch) => {
    const path = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const { cast } = await fetch(path).then((res) => res.json());
    dispatch({
      type: FETCH_MOVIE_CAST,
      payload: cast,
    });
  };
}
