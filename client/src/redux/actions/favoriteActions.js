import {
  fetchFavoriteData,
  removeFevoriteData,
  addFevoriteData,
  getFevoriteNumberData,
  getFevoritedData,
} from '../../api/favorite';
import {
  ADD_FAVORITE,
  GET_FAVORITED,
  GET_FAVORITE_LIST,
  GET_FAVORITE_NUMBER,
  REMOVE_FAVORITE,
} from '../types';

export function getFavorite() {
  return async (dispatch) => {
    const { favorites } = await fetchFavoriteData();
    dispatch({
      type: GET_FAVORITE_LIST,
      payload: favorites,
    });
  };
}

export const removeFavorite = (movieId) => {
  return async (dispatch, getState) => {
    await removeFevoriteData(movieId);
    const {
      favorite: { favoriteList, favoriteNumber, favorited },
    } = await getState();
    const newFavoriteList = favoriteList.filter(
      (item) =>
        item.movieId !== movieId &&
        item.userFrom === localStorage.getItem('userId')
    );
    const newFavoriteNumber = favoriteNumber - 1;
    const newFavorited = !favorited;
    dispatch({
      type: REMOVE_FAVORITE,
      payload: { newFavoriteList, newFavoriteNumber, newFavorited },
    });
  };
};

export const addFavorite = (movieInfo) => {
  return async (dispatch, getState) => {
    await addFevoriteData(movieInfo);
    const {
      favorite: { favoriteNumber, favorited },
    } = await getState();
    console.log(favoriteNumber);
    console.log(favorited);

    const newFavoriteNumber = favoriteNumber + 1;
    const newFavorited = !favorited;

    dispatch({
      type: ADD_FAVORITE,
      payload: { newFavoriteNumber, newFavorited },
    });
  };
};

export function getFavoriteNumber(movieInfo) {
  return async (dispatch) => {
    const { favoriteNumber } = await getFevoriteNumberData(movieInfo);
    dispatch({
      type: GET_FAVORITE_NUMBER,
      payload: favoriteNumber,
    });
  };
}

export function getFavorited(movieInfo) {
  return async (dispatch) => {
    const { favorited } = await getFevoritedData(movieInfo);
    dispatch({
      type: GET_FAVORITED,
      payload: favorited,
    });
  };
}
