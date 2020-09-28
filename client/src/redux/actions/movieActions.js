import { API_KEY, API_URL } from '../../components/Config';
import {
  FETCH_MOVIE_CAST,
  FETCH_MOVIE_DATA,
  FETCH_MOVIE_DETAIL,
} from '../types';

export function fetchMovieData(page = 1) {
  return async (dispatch) => {
    const path = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=${page}`;
    const request = await fetch(path).then((res) => res.json());
    console.log(request);
    dispatch({
      type: FETCH_MOVIE_DATA,
      payload: request,
    });
  };
}

export function fetchMovieDetail(movieId) {
  return async (dispatch) => {
    const path = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-us`;
    const request = await fetch(path).then((res) => res.json());
    console.log(request);
    dispatch({
      type: FETCH_MOVIE_DETAIL,
      payload: request,
    });
  };
}

export function fetchMovieCast(movieId) {
  return async (dispatch) => {
    const path = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const request = await fetch(path).then((res) => res.json());
    console.log(request);
    dispatch({
      type: FETCH_MOVIE_CAST,
      payload: request.cast,
    });
  };
}
