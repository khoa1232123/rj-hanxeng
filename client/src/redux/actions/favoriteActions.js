import Axios from 'axios';
import {
  GET_FAVORITE_LIST,
  GET_FAVORITE_NUMBER,
  REMOVE_FAVORITE,
} from '../types';

export function getFavorite() {
  return async (dispatch) => {
    const variables = { userFrom: localStorage.getItem('userId') };
    const request = await Axios.post('/api/favorite/getFavorite', variables);
    console.log(request);
    dispatch({
      type: GET_FAVORITE_LIST,
      payload: request.data.favorites,
    });
  };
}

export function removeFavorite(movieId) {
  return async (dispatch) => {
    const variable = { movieId, userFrom: localStorage.getItem('userId') };
    const request = await Axios.post(
      '/api/favorite/removeFromFavorite',
      variable
    );
    console.log(request);
    dispatch({
      type: REMOVE_FAVORITE,
    });
  };
}

export function getFavoriteNumber(movieInfo) {
  return async (dispatch) => {
    const variable = {
      userFrom: localStorage.getItem('userId'),
      movieId: movieInfo.id,
      movieTitle: movieInfo.original_title,
      movieImage: movieInfo.poster_path,
      movieRunTime: movieInfo.runtime,
    };
    const request = await Axios.post('/api/favorite/favoriteNumber', variable);
    console.log(request);
    dispatch({
      type: GET_FAVORITE_NUMBER,
      payload: request.data.favoriteNumber,
    });
  };
}
